import { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Logo } from '@/assets/Logo'
import StaggeredMenu from '@/components/ui/StaggerMenu/StaggerMenu'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variant } from 'motion/react'

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

const hidden: Variant = {
    opacity: 0,
}

const visible: Variant = {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
}

const MotionBox = motion.create(Box)

export const Header = () => {
    const animationsEnabled = useAnimationsEnabled()

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

            <MotionBox
                initial="hidden"
                animate={animationsEnabled ? 'visible' : 'hidden'}
                whileInView={animationsEnabled ? 'visible' : undefined}
                viewport={{ once: false, amount: 0.2 }}
                variants={{ hidden, visible }}
                className="hidden lg:flex items-center gap-2.5"
            >
                {['O nás', 'Služby', 'Kontakty'].map((item) => (
                    <Button key={item} className="text-white" variant="link">
                        {item}
                    </Button>
                ))}
            </MotionBox>

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
