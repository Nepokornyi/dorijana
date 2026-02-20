import { LogoFull } from '@/assets/logo/LogoFull'
import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { TypographyLarge, TypographyMuted } from '@/components/ui/typography'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const parentVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const LeftColumn = () => {
    const t = useTranslations('footer')
    return (
        <FlexContainer
            direction="flex-col"
            gap="gap-4"
            className="px-10 lg:px-0 hidden lg:flex items-start"
        >
            <TypographyLarge>{t('aboutTitle')}</TypographyLarge>
            <LogoFull className="w-40" />
            <TypographyMuted>{t('aboutDescription')}</TypographyMuted>
        </FlexContainer>
    )
}

const MiddleColumn = () => {
    const t = useTranslations('footer')
    return (
        <FlexContainer
            direction="flex-col"
            gap="gap-4"
            className="px-10 lg:px-0 items-start"
        >
            <TypographyLarge>{t('contactTitle')}</TypographyLarge>
            <ul className="text-sm flex flex-col gap-3 text-muted-foreground [&_li]:hover:text-white [&_li]:flex [&_li]:gap-3 [&_li]:items-center [&_li]:duration-200">
                <li>
                    <Mail strokeWidth={1} size={18} />
                    <a href="mailto:info@dorijana.cz">info@dorijana.cz</a>
                </li>
                <li>
                    <Phone strokeWidth={1} size={18} />
                    <a href="tel:+420777700202"> +420 777 700 202</a>
                </li>
                <li>
                    <MapPin strokeWidth={1} size={18} />
                    <a href="https://maps.app.goo.gl/LvYt2DQbXJFXUPty6">
                        {t('addressLine1')} <br />
                        {t('addressLine2')}
                    </a>
                </li>
            </ul>
        </FlexContainer>
    )
}

const RightColumn = () => {
    const t = useTranslations('footer')
    return (
        <FlexContainer
            width="w-full sm:w-fit"
            direction="flex-col"
            gap="gap-4"
            className="px-10 lg:px-0 items-start sm:justify-self-end"
        >
            <TypographyLarge>{t('linksTitle')}</TypographyLarge>
            <Link href="/terms">
                <TypographyMuted className="hover:text-white duration-200">
                    {t('privacyLink')}
                </TypographyMuted>
            </Link>
        </FlexContainer>
    )
}

export const Footer = () => {
    const t = useTranslations('footer')
    const animationsEnabled = useAnimationsEnabled()
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            id="footer"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center py-5 gap-5"
        >
            <Box className="w-full lg:px-32 xl:px-60 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
                <LeftColumn />
                <address className="not-italic">
                    <MiddleColumn />
                </address>
                <RightColumn />
            </Box>
            <TypographyMuted>{t('copyright', { year: currentYear })}</TypographyMuted>
        </motion.footer>
    )
}
