import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographySmall } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'

import image from '@/assets/projects.jpg'

const gridData = [
    { text: 'Nr. 03', className: 'px-20 py-10' },
    { text: 'The perks of owning an ark', className: 'py-10' },
    {
        text: 'Specific features',
        className: 'hidden lg:block py-10 flex justify-end',
    },
]

const cardData = [
    {
        numeration: 'Nr. 01',
        title: 'Designed to relax & inspire',
        text: 'Ark-Shelter shows the beauty of natural light and allows you to reconnect with nature. The modern design and large, single pane, windows seamlessly integrate the natural environment within your Ark. This leads to inspiration or lets you take the time to unwind.',
    },
    {
        numeration: 'Nr. 02',
        title: 'Sustainable',
        text: 'We use FSC-labeled wood, have a minimal waste policy, continuously reduce the carbon footprint of our units and more. Shelters can be built harvesting reusable sources, such as solar power and rainwater. The shelters are placed on ground screws that leave nature untouched',
    },
    {
        numeration: 'Nr. 03',
        title: 'Flexible',
        text: 'With their easy-to-move structure, Ark-Shelters offer ultimate flexibility regardless of their application, from pool houses for families to modular centers for healthcare companies. Get the most out of your investment with our versatile solutions that can move and grow with you.',
    },
    {
        numeration: 'Nr. 04',
        title: 'Efficient',
        text: 'Our fully equipped workshops ensure short production times. Our finished products come with everything needed and are ready to be placed and connected in just one working day. With minimal on-site work required, our units provide maximum efficiency.',
    },
    {
        numeration: 'Nr. 05',
        title: 'Durable',
        text: 'Our handcrafted shelters are built to last for decades, with a durable wooden shell that can withstand any conditions. And when you feel the need to update your Ark to match your evolving aesthetic desires, know that refurbishing is a breeze.',
    },
    {
        numeration: 'Nr. 06',
        title: 'Intelligent',
        text: 'Arks can be equipped with numerous popular smart home automation technologies in order to meet the demands of our time, enabling you to control your ark from your smartphone and keep you focused on what really matters.',
    },
]

export const Projects = () => {
    return (
        <>
            <Box className="w-full lg:w-5/6 lg:pl-[15%] grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
                {gridData.map((col) => (
                    <Box key={col.text} className={col.className}>
                        {col.text}
                    </Box>
                ))}
                <H2 className="border-none col-span-2 px-20 py-10 leading-12">
                    Our Arks are created by craftsmen. Thanks to the
                    high-quality wooden skeleton structures we can guarantee a
                    durable, solid design that shelters you from all the
                    elements.
                </H2>

                <FlexContainer
                    direction="flex-col"
                    gap="gap-10"
                    className="px-20 py-10 col-span-2 lg:col-span-1 lg:col-start-1"
                >
                    {cardData.map((card, index) => (
                        <FlexContainer
                            direction="flex-col"
                            gap="gap-4"
                            key={index}
                        >
                            <TypographySmall>{card.numeration}</TypographySmall>
                            <H3>{card.title}</H3>
                            <P>{card.text}</P>
                        </FlexContainer>
                    ))}
                </FlexContainer>

                <Box className="hidden lg:block col-span-2 relative my-10 pr-20 -mr-[16.5vw]">
                    <Image
                        src={image}
                        alt="ark image"
                        fill
                        className="object-cover"
                    />
                </Box>
            </Box>
        </>
    )
}
