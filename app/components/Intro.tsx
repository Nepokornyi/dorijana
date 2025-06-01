import { Box } from '@/components/ui/box'
import {
    H3,
    TypographyMuted,
    TypographySmall,
} from '@/components/ui/typography'
import React from 'react'

const cardsConfig = [
    { numeration: 1, title: 'Living', description: 'Housing solution' },
    { numeration: 2, title: 'Working', description: 'Office solution' },
    { numeration: 3, title: 'Relaxing', description: 'Literally any purpose' },
    { numeration: 4, title: 'Caring', description: 'Care-Shelter' },
    { numeration: 5, title: 'Hosting', description: 'Recreational solution' },
]

export const Intro = () => {
    return (
        <Box className="-mt-48 w-5/6 pl-[15%] grid grid-cols-3 gap-10 bg-white">
            {cardsConfig.map((card) => (
                <Box key={card.numeration} className="px-20 py-10">
                    <TypographySmall className="pb-2">
                        Nr. {card.numeration}
                    </TypographySmall>
                    <H3>{card.title}</H3>
                    <TypographyMuted>{card.description}</TypographyMuted>
                </Box>
            ))}
        </Box>
    )
}
