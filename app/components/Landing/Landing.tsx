import { H3 } from '@/components/ui/typography'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { RotatingText } from '@/components/RotatingText/RotatingText'
import VideoPlayer from '@/components/VideoPlayer'
import { LogoText } from '@/assets/LogoText'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variant } from 'motion/react'

const hidden: Variant = {
    opacity: 0,
}

const visible: Variant = {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
}

const MotionBox = motion.create(Box)

export const Landing = () => {
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionBox
            initial="hidden"
            animate={animationsEnabled ? 'visible' : 'hidden'}
            whileInView={animationsEnabled ? 'visible' : undefined}
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden, visible }}
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
                <FlexContainer
                    width="w-[400px]"
                    direction="flex-col"
                    gap="gap-4"
                >
                    <LogoText />
                    <H3 className="text-white">
                        Jediný způsob, jak{' '}
                        <RotatingText
                            texts={['stavět', 'tvořit', 'měnit', 'plánovat']}
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
                </FlexContainer>
            </FlexContainer>
        </MotionBox>
    )
}
