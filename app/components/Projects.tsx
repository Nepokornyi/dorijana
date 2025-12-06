import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P } from '@/components/ui/typography'
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
        title: 'Podlahové konstrukce',
        text: 'Zhotovujeme podlahy pro domácnosti i průmyslové objekty. Každá realizace splňuje požadavky přesnosti podle ČSN 744505.',
    },
    {
        title: 'Fasády a zateplení',
        text: 'Postaráme se o kompletní zateplení a revitalizaci fasád – od projekční přípravy až po finální povrch. Pracujeme s certifikovanými systémy a zaručujeme dlouhou životnost.',
    },
    {
        title: 'Sádrokartonové práce',
        text: 'Montujeme příčky, podhledy, vestavby a půdní prostory včetně izolací. Sádrokartonové konstrukce zaručují precizní výsledek a krátkou dobu montáže.',
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
                <H2 className="border-none col-span-3 px-20 py-10 leading-12">
                    Naše stavební realizace vynikají precizním zpracováním,
                    ověřenými technologiemi a kvalitními materiály. Díky tomu
                    garantujeme dlouhou životnost, vysoký komfort a
                    profesionální výsledek v každém detailu.
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
