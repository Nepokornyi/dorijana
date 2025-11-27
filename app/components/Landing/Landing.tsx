'use client'
import React from 'react'
import { H1, H3 } from '@/components/ui/typography'
// import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { motion } from 'framer-motion'
import VideoPlayer from '@/components/VideoPlayer'
import { RotatingText } from '@/components/RotatingText/RotatingText'
import { Button } from '@/components/ui/button'

const MotionBox = motion(Box)

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
                className="bg-black/25 pl-10 lg:pl-60 h-screen"
            >
                <FlexContainer
                    width="w-[400px]"
                    direction="flex-col"
                    gap="gap-4"
                    className="backdrop-blur-[1px] p-5"
                >
                    <Box>
                        <Button className="bg-black text-white hover:bg-black/90 cursor-pointer">
                            Kontaktujte nás
                        </Button>
                    </Box>
                    <H1 className="text-white">Dorijana</H1>
                    <H3 className="text-white">
                        Nový způsob, jak{' '}
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
