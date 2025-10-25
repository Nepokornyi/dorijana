'use client'

import React, {
    CSSProperties,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'

type MenuItem = { label: string; ariaLabel: string; link: string }
type SocialLink = { label: string; link: string }

interface StaggeredMenuProps {
    menuItems?: MenuItem[]
    socialLinks?: SocialLink[]
    showSocials?: boolean
    showItemNumbers?: boolean
    className?: string
    accentColor?: string
    onOpen?: () => void
    onClose?: () => void
    extraSlot?: React.ReactNode
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    menuItems = [],
    socialLinks = [],
    showSocials = true,
    showItemNumbers = true,
    className = '',
    accentColor = '#5227FF',
    onOpen,
    onClose,
    extraSlot,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const panelRef = useRef<HTMLDivElement | null>(null)
    const overlayRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => setMounted(true), [])

    const handleToggleMenu = useCallback(() => {
        const next = !isMenuOpen
        setIsMenuOpen(next)
        if (next) onOpen?.()
        else onClose?.()
    }, [isMenuOpen, onOpen, onClose])

    useLayoutEffect(() => {
        const panel = panelRef.current
        const overlay = overlayRef.current
        if (!panel || !overlay) return

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
            gsap.set(panel, { x: '100%', display: 'flex' })
            gsap.to(panel, { x: '0%', duration: 0.6, ease: 'power4.out' })
            gsap.fromTo(
                overlay,
                { opacity: 0, pointerEvents: 'none' },
                {
                    opacity: 0.5,
                    pointerEvents: 'auto',
                    duration: 0.4,
                    ease: 'power2.out',
                }
            )
        } else {
            document.body.style.overflow = ''
            gsap.to(panel, {
                x: '100%',
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(panel, { display: 'none' })
                },
            })
            gsap.to(overlay, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
            })
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            {/* Placeholder keeps header layout intact */}
            <div
                className={`relative z-[80] ${className}`}
                style={{ '--menu-accent-color': accentColor } as CSSProperties}
            />

            {/* Render overlay, panel, and button above everything via portal */}
            {mounted &&
                createPortal(
                    <>
                        {/* Toggle button */}
                        <button
                            onClick={handleToggleMenu}
                            type="button"
                            className={`fixed top-6 right-10 flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium transition-colors duration-300 z-[10000] ${
                                isMenuOpen
                                    ? 'text-[var(--menu-accent-color)]'
                                    : 'text-white'
                            }`}
                            style={
                                {
                                    '--menu-accent-color': accentColor,
                                } as CSSProperties
                            }
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <span className="text-lg select-none">
                                {isMenuOpen ? 'Close' : 'Menu'}
                            </span>
                            <span className="relative w-[18px] h-[18px] flex items-center justify-center">
                                <span
                                    className={`absolute w-full h-[2px] bg-current rounded-sm transition-transform duration-300 ${
                                        isMenuOpen ? 'rotate-45' : 'rotate-0'
                                    }`}
                                />
                                <span
                                    className={`absolute w-full h-[2px] bg-current rounded-sm transition-transform duration-300 ${
                                        isMenuOpen ? '-rotate-45' : 'rotate-90'
                                    }`}
                                />
                            </span>
                        </button>

                        {/* Overlay */}
                        <div
                            ref={overlayRef}
                            className="fixed inset-0 bg-black opacity-0 pointer-events-none z-[9998]"
                            onClick={handleToggleMenu}
                        />

                        {/* Sliding Panel */}
                        <aside
                            ref={panelRef}
                            className="fixed top-0 right-0 h-full hidden flex-col bg-black p-8 overflow-y-auto z-[9999] w-[clamp(280px,80vw,420px)] text-white"
                            style={
                                {
                                    '--menu-accent-color': accentColor,
                                } as CSSProperties
                            }
                        >
                            <ul
                                role="list"
                                data-numbering={showItemNumbers || undefined}
                                className="flex flex-col gap-5 mt-24"
                            >
                                {menuItems.length ? (
                                    menuItems.map((item, i) => (
                                        <li key={item.label + i}>
                                            <a
                                                href={item.link}
                                                aria-label={item.ariaLabel}
                                                className="block text-3xl font-semibold uppercase tracking-tight text-white hover:text-[var(--menu-accent-color)] transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <span className="text-gray-400">
                                            No items
                                        </span>
                                    </li>
                                )}
                            </ul>

                            {extraSlot && (
                                <div className="mt-12">{extraSlot}</div>
                            )}

                            {showSocials && socialLinks.length > 0 && (
                                <div className="mt-auto pt-8 flex flex-col gap-4">
                                    <h3 className="text-[var(--menu-accent-color)] text-base font-medium">
                                        Socials
                                    </h3>
                                    <ul className="flex flex-wrap items-center gap-4">
                                        {socialLinks.map((link, index) => (
                                            <li key={link.label + index}>
                                                <a
                                                    href={link.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg font-medium text-white hover:text-[var(--menu-accent-color)] transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </aside>
                    </>,
                    document.body
                )}
        </>
    )
}

export default StaggeredMenu
