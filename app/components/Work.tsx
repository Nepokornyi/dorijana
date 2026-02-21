import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographyMuted } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'

const WORK_GRID_CLASSES = [
    'px-10 lg:px-0 pt-10',
    'pt-10',
    'pt-10 flex justify-end hidden lg:block lg:justify-self-end',
]

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delayChildren: stagger(0.33),
            delay: 0.33,
        },
    },
}

const textLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const textRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 0.75,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
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

const MotionBox = motion(Box)
const MotionFlexContainer = motion(FlexContainer)

export const Work = () => {
    const t = useTranslations('work')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]
    const cardData = t.raw('cards') as Array<{ title: string; text: string }>

    return (
        <MotionBox
            id="work"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-x-10"
        >
            {gridTexts.map((text, i) => (
                <Box key={text} className={WORK_GRID_CLASSES[i] ?? ''}>
                    {text}
                </Box>
            ))}

            <MotionFlexContainer
                variants={textLeftVariants}
                direction="flex-col"
                gap="gap-10"
                className="px-10 lg:px-0 py-10 col-span-2 lg:col-span-1"
            >
                {cardData.map((card, index) => (
                    <Box key={index}>
                        <H3 className="pb-4">{card.title}</H3>
                        <P>{card.text}</P>
                    </Box>
                ))}

                <TypographyMuted className="uppercase py-4">
                    {t('wantMore')}?
                </TypographyMuted>

                <MotionBox
                    className="w-fit"
                    initial="hidden"
                    whileHover="hover"
                >
                    <H2 className="w-fit cursor-pointer duration-200">
                        <a href="mailto:info@dorijana.cz">{t('contactUs')}</a>
                    </H2>
                    <motion.span
                        variants={arrowLineVariants}
                        className="absolute left-0 -bottom-1 h-[1px] bg-primary"
                    />
                </MotionBox>
            </MotionFlexContainer>

            <MotionBox
                variants={textRightVariants}
                className="hidden lg:flex col-span-2 my-10 bg-black/25"
            >
                <VideoPlayer
                    src="/video2/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </MotionBox>
        </MotionBox>
    )
}
