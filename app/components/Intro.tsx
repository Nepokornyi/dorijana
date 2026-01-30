import { Box } from '@/components/ui/box'
import {
    H3,
    TypographyMuted,
    TypographySmall,
} from '@/components/ui/typography'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { useLenis } from '@/contexts/lenis-context'
import { motion, Variants } from 'motion/react'

const cardsConfig = [
    {
        numeration: 'Č. 01',
        title: 'Identita',
        description: 'Stavební vize',
        link: '#about',
    },
    {
        numeration: 'Č. 02',
        title: 'Služby',
        description: 'Stavební práce',
        link: '#work',
    },
    {
        numeration: 'Č. 03',
        title: 'Spolupráce',
        description: 'Naši partneři',
        link: '#partners',
    },
    {
        numeration: 'Č. 04',
        title: 'Kvalita',
        description: 'Standardy a provedení',
        link: '#projects',
    },
    {
        numeration: 'Č. 05',
        title: 'Realizace',
        description: 'Vybrané stavební projekty',
        link: '#footer',
    },
]

const parentVariants: Variants = {
    hidden: { y: 260 },
    visible: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: 'easeOut',
            delay: 0.6,
        },
    },
}

const staggerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 1.8,
            staggerChildren: 0.2,
        },
    },
}

const childVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const arrowLineVariants: Variants = {
    hidden: { width: 0 },
    hover: {
        width: '100%',
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
}

const MotionBox = motion.create(Box)

export const Intro = () => {
    const { scrollTo } = useLenis()
    const animationsEnabled = useAnimationsEnabled()

    const handleNavClick = (target: string) => {
        scrollTo(target)
    }

    return (
        <MotionBox
            id="intro"
            variants={parentVariants}
            initial="hidden"
            animate={animationsEnabled ? 'visible' : 'hidden'}
            className="-mt-64 mr-16 lg:mr-32 xl:mr-60"
        >
            <MotionBox
                variants={staggerVariants}
                className="lg:pl-32 xl:pl-60 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 bg-background text-foreground"
            >
                {cardsConfig.map((card) => (
                    <MotionBox
                        variants={childVariants}
                        key={card.numeration}
                        className="px-10 lg:px-0 pt-20 pb-10"
                    >
                        <Box
                            className="cursor-pointer w-fit group"
                            onClick={() => handleNavClick(card.link)}
                        >
                            <motion.div
                                className="relative inline-block"
                                initial="hidden"
                                whileHover="hover"
                            >
                                <TypographySmall className="pb-2">
                                    {card.numeration}
                                </TypographySmall>

                                <H3>{card.title}</H3>

                                <TypographyMuted className="group-hover:text-primary duration-200">
                                    {card.description}
                                </TypographyMuted>
                                {/* Arrow line */}
                                <motion.span
                                    variants={arrowLineVariants}
                                    className="absolute left-0 -bottom-1 h-[1px] bg-primary"
                                />
                            </motion.div>
                        </Box>
                    </MotionBox>
                ))}
            </MotionBox>
        </MotionBox>
    )
}
