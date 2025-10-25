'use client'
import React from 'react'
import { Header } from '../Header'
import { H1, H3 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { motion } from 'framer-motion'
import VideoPlayer from '@/components/VideoPlayer'

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
                justifyContent="justify-center"
                direction="flex-col"
                gap="gap-4"
                className="pl-10 lg:pl-60 h-screen"
            >
                <Header />
                <Box>
                    <Button className="bg-black text-white hover:bg-black/70">
                        Check out our feature news
                    </Button>
                </Box>
                <H1 className="text-white">A new way of building</H1>
                <H3 className="text-white">Quick and closer to nature</H3>
            </FlexContainer>
        </MotionBox>
    )
}
