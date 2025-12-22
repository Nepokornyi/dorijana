import { H3 } from '@/components/ui/typography'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { motion } from 'motion/react'
import { RotatingText } from '@/components/RotatingText/RotatingText'
import VideoPlayer from '@/components/VideoPlayer'
import { LogoText } from '@/assets/LogoText'

const MotionBox = motion.create(Box)

export const Landing = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
