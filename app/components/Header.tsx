import { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Logo } from '@/assets/logo/Logo'
import StaggeredMenu from '@/components/ui/StaggerMenu/StaggerMenu'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'
import { useLenis } from '@/contexts/lenis-context'

const menuItems = [
    { label: 'O nás', ariaLabel: 'Go to home page', link: '#about' },
    { label: 'Služby', ariaLabel: 'Learn about us', link: '#work' },
    { label: 'Kontakty', ariaLabel: 'Get in touch', link: '#partners' },
]

const socialLinks = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
]

const parentVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeOut',
            delay: 1,
            delayChildren: stagger(0.3),
        },
    },
}

const logoVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
}

const menuVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
}

const MotionBox = motion.create(Box)
const MotionButton = motion.create(Button)

export const Header = () => {
    const animationsEnabled = useAnimationsEnabled()
    const { scrollTo } = useLenis()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (target: string) => {
        scrollTo(target)
    }

    return (
        <motion.header
            variants={parentVariants}
            initial="hidden"
            animate={animationsEnabled ? 'visible' : 'hidden'}
            whileInView={animationsEnabled ? 'visible' : undefined}
            viewport={{ once: true, amount: 0.2 }}
            className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 transition-colors duration-300 ${
                scrolled ? 'bg-background backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <MotionBox variants={logoVariants}>
                <Logo
                    className="size-10 cursor-pointer"
                    onClick={() => handleNavClick('#landing')}
                />
            </MotionBox>

            <Box className="hidden lg:flex items-center gap-2.5">
                {menuItems.map((item) => (
                    <MotionButton
                        variants={menuVariants}
                        key={item.label}
                        className="text-white"
                        variant="link"
                        onClick={() => handleNavClick(item.link)}
                    >
                        {item.label}
                    </MotionButton>
                ))}
            </Box>

            <motion.div
                variants={menuVariants}
                className="lg:hidden relative z-50"
            >
                <StaggeredMenu
                    menuItems={menuItems}
                    socialLinks={socialLinks}
                    accentColor="#737373"
                />
            </motion.div>
        </motion.header>
    )
}
