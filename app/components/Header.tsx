import { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Logo } from '@/assets/logo/Logo'
import StaggeredMenu from '@/components/ui/StaggerMenu/StaggerMenu'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'
import { useLenis } from '@/contexts/lenis-context'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

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

const NAV_CONFIG = [
    { key: 'identity' as const, link: '#about' },
    { key: 'services' as const, link: '#work' },
    { key: 'partners' as const, link: '#partners' },
    { key: 'projects' as const, link: '#projects' },
    { key: 'contact' as const, link: '#footer' },
]

export const Header = () => {
    const t = useTranslations('common.nav')
    const animationsEnabled = useAnimationsEnabled()
    const { scrollTo } = useLenis()
    const [scrolled, setScrolled] = useState(false)
    const locale = useLocale()
    const pathname = usePathname()

    const menuItems = NAV_CONFIG.map(({ key, link }) => ({
        label: t(key),
        ariaLabel: t('ariaHome'),
        link,
    }))

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
            className={`lenis-prevent fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 
                transition-colors duration-300
                ${scrolled ? 'bg-background backdrop-blur-md' : 'bg-transparent'}`}
        >
            <MotionBox variants={logoVariants}>
                <Link
                    href="/"
                    aria-label={t('ariaHome')}
                    className="cursor-pointer"
                >
                    <Logo className="size-10" />
                </Link>
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
                <Box className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-white/30">
                    {routing.locales.map((loc) => (
                        <Link
                            key={loc}
                            href={pathname || '/'}
                            locale={loc}
                            className={`text-sm font-medium transition-colors duration-200 ${
                                locale === loc ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                            aria-label={loc === 'cs' ? 'Čeština' : 'English'}
                        >
                            {loc.toUpperCase()}
                        </Link>
                    ))}
                </Box>
            </Box>

            <motion.div
                variants={menuVariants}
                className="lg:hidden relative z-50"
            >
                <StaggeredMenu
                    menuItems={menuItems}
                    accentColor="#737373"
                />
            </motion.div>
        </motion.header>
    )
}
