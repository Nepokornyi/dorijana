import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographyMuted } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import image from '@/assets/work.jpg'

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
