import React from 'react'
import { Header } from '../Header'
import { H1, H3 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'

export const Landing = () => {
    return (
        <Box>
            <video
                src="/video/landing.mp4"
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
            />
            <FlexContainer
                justifyContent="justify-center"
                direction="flex-col"
                gap="gap-4"
                className="pl-10 md:pl-60 h-screen"
            >
                <Header />
                <Box>
                    <Button className="bg-white text-black">
                        Check out our feature news
                    </Button>
                </Box>
                <H1 className="text-white">A new way of building</H1>
                <H3 className="text-white">Quick and closer to nature</H3>
            </FlexContainer>
        </Box>
    )
}
