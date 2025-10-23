import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographyMuted } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import image from '@/assets/work.jpg'

const gridData = [
    { text: 'Nr. 02', className: 'px-10 lg:px-20 py-10' },
    { text: 'Why Dorijana', className: 'py-10' },
    {
        text: 'To unwind and connect',
        className: 'py-10 flex justify-end hidden lg:block',
    },
]

const cardData = [
    {
        title: 'Find a space to unwind',
        text: 'Ark-Shelter shows the beauty of natural light and allows you to reconnect with nature. The large single pane windows seamlessly integrate the natural environment within your Ark. Enjoy a moment for yourself and take time to unwind.',
    },
    {
        title: 'Connect with nature',
        text: 'Become as productive as nature itself, and grow and bloom within your own Ark. Because of Ark-Shelter’s self-sufficient system and ecological materials, you’ll live with zero-impact.',
    },
]

export const Work = () => {
    return (
        <>
            <Box className="w-full lg:w-5/6 lg:pl-[15%] grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
                {gridData.map((col) => (
                    <Box key={col.text} className={col.className}>
                        {col.text}
                    </Box>
                ))}

                <FlexContainer
                    direction="flex-col"
                    gap="gap-10"
                    className="px-10 lg:px-20 py-10 col-span-2 lg:col-span-1"
                >
                    {cardData.map((card, index) => (
                        <Box key={index}>
                            <H3 className="pb-4">{card.title}</H3>
                            <P>{card.text}</P>
                        </Box>
                    ))}

                    <TypographyMuted className="uppercase py-4">
                        Need more info?
                    </TypographyMuted>

                    <H2 className="w-fit">Ask us your question</H2>
                </FlexContainer>

                <Box className="col-span-2 py-10 border hidden lg:block">
                    <Image
                        src={image}
                        alt="dorijana vertical building"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Box>
            </Box>
        </>
    )
}
