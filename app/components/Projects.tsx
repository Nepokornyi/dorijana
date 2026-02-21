import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H3, P } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'

const PROJECTS_GRID_CLASSES = [
    'px-10 lg:px-0 py-10',
    'py-10',
    'py-10 flex justify-end hidden lg:block lg:justify-self-end',
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

const MotionBox = motion(Box)
const MotionFlexContainer = motion(FlexContainer)
const MotionH3 = motion(H3)

export const Projects = () => {
    const t = useTranslations('projects')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]
    const cardData = t.raw('cards') as Array<{ title: string; text: string }>

    return (
        <MotionBox
            id="projects"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-x-10 overflow-hidden"
        >
            {gridTexts.map((text, i) => (
                <Box key={text} className={PROJECTS_GRID_CLASSES[i] ?? ''}>
                    {text}
                </Box>
            ))}
            <MotionH3
                variants={textLeftVariants}
                fontSize="text-xl lg:text-2xl"
                className="col-span-3 px-10 lg:px-0 lg:leading-10 pt-10"
            >
                {t('intro')}
            </MotionH3>

            <MotionFlexContainer
                variants={textLeftVariants}
                direction="flex-col"
                gap="gap-10"
                className="px-10 lg:px-0 py-10 col-span-2 lg:col-span-1 lg:col-start-1"
            >
                {cardData.map((card, index) => (
                    <FlexContainer direction="flex-col" gap="gap-4" key={index}>
                        <H3>{card.title}</H3>
                        <P>{card.text}</P>
                    </FlexContainer>
                ))}
            </MotionFlexContainer>

            <MotionBox
                variants={textRightVariants}
                className="hidden lg:block col-span-2 relative my-10 pr-20 -mr-[12.5vw] bg-black/35"
            >
                <VideoPlayer
                    src="/video5/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </MotionBox>
        </MotionBox>
    )
}
