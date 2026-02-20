import React, { CSSProperties, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, Variants, stagger } from 'motion/react'
import { useDisableScroll } from '@/hooks/useDisableScroll'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { useLenis } from '@/contexts/lenis-context'

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
}

const overlayVariants: Variants = {
    hidden: {
        opacity: 0,
        pointerEvents: 'none',
    },
    visible: {
        opacity: 0.5,
        pointerEvents: 'auto',
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        pointerEvents: 'none',
        transition: {
            duration: 0.2,
            ease: 'easeIn',
        },
    },
}

const panelVariants: Variants = {
    hidden: {
        x: '100%',
    },
    visible: {
        x: '0%',
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        x: '100%',
        transition: {
            duration: 0.35,
            delay: 0.3,
            ease: [0.7, 0, 0.84, 0],
        },
    },
}

const menuContainerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.35,
            delayChildren: stagger(0.08, { startDelay: 0.35 }),
            staggerChildren: 0.08,
        },
    },
    exit: {
        transition: {
            duration: 0.25,
            staggerChildren: 0.06,
            staggerDirection: -1,
        },
    },
}

const menuItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -5,
        transition: {
            duration: 0.2,
            ease: 'easeIn',
        },
    },
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    menuItems = [],
    socialLinks = [],
    showSocials = true,
    showItemNumbers = true,
    className = '',
    accentColor = '#737373',
    onOpen,
    onClose,
}) => {
    const animationsEnabled = useAnimationsEnabled()
    const { scrollTo, lenis } = useLenis()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [pendingScrollTarget, setPendingScrollTarget] = useState<
        string | null
    >(null)

    useDisableScroll(isMenuOpen)

    useEffect(() => setMounted(true), [])

    // Trigger scroll after menu closes and Lenis is available
    useEffect(() => {
        if (!isMenuOpen && pendingScrollTarget && lenis) {
            scrollTo(pendingScrollTarget)
            setPendingScrollTarget(null)
        }
    }, [isMenuOpen, pendingScrollTarget, lenis, scrollTo])

    const handleToggleMenu = useCallback(() => {
        const next = !isMenuOpen
        setIsMenuOpen(next)
        if (next) onOpen?.()
        else onClose?.()
    }, [isMenuOpen, onOpen, onClose])

    const handleNavClick = (target: string) => {
        setPendingScrollTarget(target)
        handleToggleMenu()
    }

    return (
        <>
            {/* Placeholder keeps header layout intact */}
            <div className={`relative z-50 ${className}`} />

            {/* Render overlay, panel, and button above everything via portal */}
            {mounted &&
                createPortal(
                    <>
                        {/* Toggle button */}
                        <button
                            onClick={handleToggleMenu}
                            type="button"
                            className="lg:hidden fixed top-6 right-10 flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium transition-colors duration-300 z-60 text-white"
                            aria-label={isMenuOpen ? 'Close' : 'Menu'}
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

                        {/* Overlay & Sliding Panel */}
                        {animationsEnabled && (
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <>
                                        <motion.div
                                            className="fixed inset-0 bg-black z-50"
                                            variants={overlayVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            onClick={handleToggleMenu}
                                        />

                                        <motion.aside
                                            className="fixed top-0 right-0 h-full flex flex-col bg-black p-8 z-50 w-[clamp(280px,80vw,420px)] text-white"
                                            style={
                                                {
                                                    '--menu-accent-color':
                                                        accentColor,
                                                } as CSSProperties
                                            }
                                            variants={panelVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                        >
                                            <motion.ul
                                                role="list"
                                                data-numbering={
                                                    showItemNumbers || undefined
                                                }
                                                className="flex flex-col gap-5 mt-24"
                                                variants={menuContainerVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                {menuItems.length &&
                                                    menuItems.map((item, i) => (
                                                        <motion.li
                                                            key={item.label + i}
                                                            variants={
                                                                menuItemVariants
                                                            }
                                                        >
                                                            <button
                                                                onClick={() =>
                                                                    handleNavClick(
                                                                        item.link,
                                                                    )
                                                                }
                                                                aria-label={
                                                                    item.ariaLabel
                                                                }
                                                                className="block text-3xl font-semibold uppercase tracking-tight text-white hover:text-(--menu-accent-color) transition-colors duration-200"
                                                            >
                                                                {item.label}
                                                            </button>
                                                        </motion.li>
                                                    ))}
                                            </motion.ul>

                                            {showSocials &&
                                                socialLinks.length > 0 && (
                                                    <motion.div
                                                        className="mt-auto pt-8 flex flex-col gap-4"
                                                        variants={
                                                            menuContainerVariants
                                                        }
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                    >
                                                        <motion.h3
                                                            variants={
                                                                menuItemVariants
                                                            }
                                                            className="text-(--menu-accent-color) text-base font-medium"
                                                        >
                                                            Socials
                                                        </motion.h3>
                                                        <ul className="flex flex-wrap items-center gap-4">
                                                            {socialLinks.map(
                                                                (
                                                                    link,
                                                                    index,
                                                                ) => (
                                                                    <motion.li
                                                                        key={
                                                                            link.label +
                                                                            index
                                                                        }
                                                                        variants={
                                                                            menuItemVariants
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                link.link
                                                                            }
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-lg font-medium text-white hover:text-(--menu-accent-color) transition-colors"
                                                                        >
                                                                            {
                                                                                link.label
                                                                            }
                                                                        </Link>
                                                                    </motion.li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                        </motion.aside>
                                    </>
                                )}
                            </AnimatePresence>
                        )}
                    </>,
                    document.body,
                )}
        </>
    )
}

export default StaggeredMenu
