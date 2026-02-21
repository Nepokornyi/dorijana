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
const MotionP = motion.create(P)

const ABOUT_GRID_CLASSES = [
    'px-10 lg:px-0 py-10',
    'px-10 lg:px-0 py-10',
    'px-10 lg:px-0 py-10 hidden lg:block lg:justify-self-end',
]

export const About = () => {
    const t = useTranslations('about')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]

    return (
        <MotionBox
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true, amount: 0.2 }}
        >
            <MotionBox
                variants={titleVariants}
                id="about"
                className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {gridTexts.map((text, i) => (
                    <Box key={text} className={ABOUT_GRID_CLASSES[i] ?? ''}>
                        {text}
                    </Box>
                ))}
            </MotionBox>
            <MotionBox className="w-full lg:px-32 xl:px-60 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-2.5">
                <MotionH3
                    variants={textLeftVariants}
                    className="hidden lg:block px-10 lg:px-0 py-10"
                >
                    {t('whoWeAre')}
                </MotionH3>
                <MotionH3
                    variants={textRightVariants}
                    fontSize="text-xl lg:text-2xl"
                    className="px-10 lg:px-0 py-10 lg:col-span-2 lg:text-justify"
                >
                    {t('paragraph1')}
                </MotionH3>
                <MotionP
                    variants={textLeftVariants}
                    className="px-10 lg:px-0 lg:col-start-2 lg:text-justify"
                >
                    {t('paragraph2')}
                </MotionP>
                <MotionP
                    variants={textRightVariants}
                    className="px-10 lg:pl-10 lg:pr-0 lg:col-start-3 lg:text-justify"
                >
                    {t('paragraph3')}
                </MotionP>
            </MotionBox>
            <Box className="relative w-full h-[50vh] bg-black/35">
                <VideoPlayer
                    src="/video3/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </Box>
        </MotionBox>
    )
}
