import { Box } from '@/components/ui/box'
import { H3, P } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delayChildren: stagger(0.33),
        },
    },
}

const titleVariants: Variants = {
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
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const MotionBox = motion.create(Box)
const MotionH3 = motion.create(H3)

const QUALITY_GRID_CLASSES = [
    'px-10 lg:px-0 pt-10',
    'px-10 lg:px-0 pt-10',
    'px-10 lg:px-0 pt-10 hidden lg:block lg:justify-self-end',
]

export const Quality = () => {
    const t = useTranslations('quality')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]
    const cardData = t.raw('cards') as Array<{ title: string; text: string }>

    return (
        <MotionBox
            id="quality"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true, amount: 0.2 }}
            className="pb-10"
        >
            <MotionBox
                variants={titleVariants}
                className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {gridTexts.map((text, i) => (
                    <Box key={text} className={QUALITY_GRID_CLASSES[i] ?? ''}>
                        {text}
                    </Box>
                ))}
            </MotionBox>

            <MotionBox className="w-full lg:px-32 xl:px-60 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-2.5">
                <MotionH3
                    variants={textLeftVariants}
                    className="hidden lg:block px-10 lg:px-0 py-10"
                >
                    {t('title')}
                </MotionH3>
                <MotionH3
                    variants={textRightVariants}
                    className="px-10 lg:px-0 py-10 lg:col-span-2 lg:text-justify"
                >
                    {t('intro')}
                </MotionH3>
                <MotionBox
                    variants={textLeftVariants}
                    className="px-10 lg:px-0 flex flex-col gap-4 lg:col-start-2"
                >
                    <H3>{cardData[0].title}</H3>
                    <P className="text-justify">{cardData[0].text}</P>
                </MotionBox>
                <MotionBox
                    variants={textRightVariants}
                    className="px-10 lg:px-0 flex flex-col gap-4 lg:col-start-3"
                >
                    <H3>{cardData[1].title}</H3>
                    <P className="text-justify">{cardData[1].text}</P>
                </MotionBox>
                {/* TODO: Think of how to add more content */}
                {/* <MotionBox
                    variants={textLeftVariants}
                    className="px-10 lg:px-0 flex flex-col gap-4 lg:col-span-2 lg:col-start-2"
                >
                    <H3>{cardData[2].title}</H3>
                    <P className="text-justify">{cardData[2].text}</P>
                </MotionBox> */}
            </MotionBox>

            <Box className="relative w-full h-[50vh] bg-black/35">
                <VideoPlayer
                    src="/video5/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </Box>
        </MotionBox>
    )
}
