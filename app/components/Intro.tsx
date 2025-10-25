import { Box } from '@/components/ui/box'
import {
    H3,
    TypographyMuted,
    TypographySmall,
} from '@/components/ui/typography'
import React from 'react'

const cardsConfig = [
    { numeration: 'Č.  01', title: 'Bydlení', description: 'Stavební řešení' },
    { numeration: 'Č.  02', title: 'Služby', description: 'Naše služby' },
    {
        numeration: 'Č.  03',
        title: 'Práce',
        description: 'Co jsme dělali',
    },
    { numeration: 'Č. 04', title: 'Podpora', description: 'Naše spolehlivost' },
    {
        numeration: 'Č.  05',
        title: 'Hosting',
        description: 'Recreational solution',
    },
]

export const Intro = () => {
    return (
        <Box className="-mt-64 w-5/6 lg:pl-[15%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 bg-background text-foreground">
            {cardsConfig.map((card) => (
                <Box
                    key={card.numeration}
                    className="px-10 lg:px-20 pt-20 pb-10"
                >
                    <TypographySmall className="pb-2">
                        {card.numeration}
                    </TypographySmall>
                    <H3>{card.title}</H3>
                    <TypographyMuted>{card.description}</TypographyMuted>
                </Box>
            ))}
        </Box>
    )
}
