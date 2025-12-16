'use client'

import { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import StaggeredMenu from '@/components/ui/StaggerMenu/StaggerMenu'
import { Logo } from '@/assets/Logo'

const menuItems = [
    { label: 'O nás', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Služby', ariaLabel: 'Learn about us', link: '/' },
    { label: 'Kontakty', ariaLabel: 'Get in touch', link: '/' },
]

const socialLinks = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
]

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 transition-colors duration-300 ${
                scrolled ? 'bg-background backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <Logo className="size-10 cursor-pointer" />

            <Box className="hidden lg:flex items-center gap-2.5">
                {['O nás', 'Služby', 'Kontakty'].map((item) => (
                    <Button key={item} className="text-white" variant="link">
                        {item}
                    </Button>
                ))}
            </Box>

            <div className="lg:hidden relative z-50">
                <StaggeredMenu
                    menuItems={menuItems}
                    socialLinks={socialLinks}
                    accentColor="#737373"
                />
            </div>
        </header>
    )
}
