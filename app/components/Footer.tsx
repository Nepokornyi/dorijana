import { LogoFull } from '@/assets/logo/LogoFull'
import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { TypographyLarge, TypographyMuted } from '@/components/ui/typography'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion, Variants } from 'motion/react'

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

const LeftColumn = () => (
    <FlexContainer
        direction="flex-col"
        gap="gap-4"
        className="hidden lg:flex items-start px-10 lg:px-0 py-10"
    >
        <TypographyLarge>O společnosti</TypographyLarge>
        <LogoFull className="w-40" />
        <TypographyMuted>
            Dorijana s.r.o. je pražská stavební společnost, která provádí
            stavební zakázky ve vysoké kvalitě s velkým důrazem na detaily.
        </TypographyMuted>
    </FlexContainer>
)

const MiddleColumn = () => (
    <FlexContainer
        direction="flex-col"
        gap="gap-4"
        className="items-start px-10 lg:px-0 py-10"
    >
        <TypographyLarge>Kontaktujte nás</TypographyLarge>
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
                    K Červenému dvoru 175/18a <br />
                    Strašnice, 100 00 Praha 10
                </a>
            </li>
        </ul>
    </FlexContainer>
)

const RightColumn = () => (
    <FlexContainer
        width="w-fit"
        direction="flex-col"
        gap="gap-4"
        className="items-start px-10 lg:px-0 py-10 justify-self-end"
    >
        <TypographyLarge>Důležité odkazy</TypographyLarge>
        <a href="/terms">
            <TypographyMuted className="hover:text-white duration-200">
                Podmínky ochrany osobních údajů
            </TypographyMuted>
        </a>
    </FlexContainer>
)

export const Footer = () => {
    const animationsEnabled = useAnimationsEnabled()
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            id="footer"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            className="w-full flex flex-col items-center py-5 gap-5"
        >
            <Box className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
                <LeftColumn />
                <address className="not-italic">
                    <MiddleColumn />
                </address>
                <RightColumn />
            </Box>
            <TypographyMuted>
                Dorijana s.r.o. © 2002-{currentYear}
            </TypographyMuted>
        </motion.footer>
    )
}
