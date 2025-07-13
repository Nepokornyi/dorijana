import { Box } from '@/components/ui/box'
import {
    H3,
    TypographyMuted,
    TypographySmall,
} from '@/components/ui/typography'
import React from 'react'

const cardsConfig = [
    { numeration: 'Nr.  01', title: 'Living', description: 'Housing solution' },
    { numeration: 'Nr.  02', title: 'Working', description: 'Office solution' },
    {
        numeration: 'Nr.  03',
        title: 'Relaxing',
        description: 'Literally any purpose',
    },
    { numeration: 'Nr. 04', title: 'Caring', description: 'Care-Shelter' },
    {
        numeration: 'Nr.  05',
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
