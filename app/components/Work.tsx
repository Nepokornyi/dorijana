import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographyMuted } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import jarov from '@/assets/work/jarov.jpg'
import balabenka from '@/assets/work/balabenka.jpg'

const gridData = [
    { text: 'Č. 02', className: 'px-10 lg:px-20 py-10' },
    { text: 'Proč Dorijana?', className: 'py-10' },
    {
        text: 'Naše služby',
        className: 'py-10 flex justify-end hidden lg:block',
    },
]

const cardData = [
    {
        title: 'Kompletní Stavební Práce',
        text: 'Zajišťujeme kompletní stavební práce v Praze a okolí — od základů až po finální úpravy. Stavíme s jistotou, kvalitou a respektem k vašemu času i rozpočtu',
    },
    {
        title: 'Omítky a povrchové úpravy',
        text: 'Provádíme strojní sádrové, jádrové a stěrkové omítky s precizní rovinností a dlouhou životností. Vhodné pro nové stavby i rekonstrukce.',
    },
    {
        title: 'Zdivo a základové konstrukce',
        text: 'Realizujeme zděné konstrukce z cihel, Ytongu a tvárnic, stejně jako betonáž základových pasů a desek. Zajišťujeme přesnost, stabilitu a dodržení technologických postupů.',
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
                        {'Chceš vědět víc'}?
                    </TypographyMuted>

                    <H2 className="w-fit">{'Kontaktuj nás'}</H2>
                </FlexContainer>

                <FlexContainer
                    direction="flex-col"
                    gap="gap-10"
                    className="col-span-2 my-10"
                >
                    <Box className="w-full h-full">
                        <Image
                            src={jarov}
                            alt="dorijana vertical building"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/25" />
                    </Box>
                    <Box className="w-full h-full">
                        <Image
                            src={balabenka}
                            alt="dorijana vertical building"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/25" />
                    </Box>
                </FlexContainer>
            </Box>
        </>
    )
}
