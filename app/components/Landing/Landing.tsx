import { H3 } from '@/components/ui/typography'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { RotatingText } from '@/components/RotatingText/RotatingText'
import VideoPlayer from '@/components/VideoPlayer'
import { LogoText } from '@/assets/logo/LogoText'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'

const parentVariants: Variants = {
    hidden: {
        scale: 0.92,
        opacity: 0,
        filter: 'blur(20px)',
    },
    visible: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            opacity: { duration: 0.3 },
            filter: { duration: 0.8 },
            scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            delayChildren: 0.5,
        },
    },
}

const childVariants: Variants = {
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

const MotionBox = motion.create(Box)
const MotionFlexBox = motion.create(FlexContainer)

export const Landing = () => {
    const t = useTranslations('landing')
    const animationsEnabled = useAnimationsEnabled()
    const rotatingWords = t.raw('rotatingWords') as string[]

    return (
        <Box id="landing">
            <MotionBox
                variants={parentVariants}
                initial="hidden"
                animate={animationsEnabled ? 'visible' : 'hidden'}
                whileInView={animationsEnabled ? 'visible' : undefined}
                viewport={{ once: true, amount: 0.2 }}
            >
                <VideoPlayer
                    src="/video1/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />

                <FlexContainer
                    alignItems="items-center"
                    className="bg-black/35 px-10 lg:px-32 xl:px-60 h-screen"
                >
                    <MotionFlexBox
                        width="w-[400px]"
                        direction="flex-col"
                        gap="gap-4"
                        variants={childVariants}
                        className="pr-6 sm:pr-0"
                    >
                        <LogoText />
                        <H3 className="text-white">
                            {t('heroPrefix')}{' '}
                            <RotatingText
                                texts={rotatingWords}
                                mainClassName="justify-center overflow-hidden"
                                staggerFrom={'last'}
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-120%' }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{
                                    type: 'spring',
                                    damping: 30,
                                    stiffness: 400,
                                }}
                                rotationInterval={2000}
                            />
                        </H3>
                    </MotionFlexBox>
                </FlexContainer>
            </MotionBox>
        </Box>
    )
}
