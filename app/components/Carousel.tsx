import React from 'react'
import Image from 'next/image'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'

import image from '@/assets/carousel.jpg'

export const Carousel = () => {
    return (
        <FlexContainer width="w-full lg:w-5/6" className="lg:pl-[15%] my-32">
            <Box className="w-full h-[75vh] lg:ml-20">
                <Image
                    src={image}
                    alt="dorijana vertical building"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </FlexContainer>
    )
}
