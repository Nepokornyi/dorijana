import { Box } from '@/components/ui/box'
import { H3 } from '@/components/ui/typography'
import React from 'react'

const gridData = [
    { text: 'Company', className: 'px-20 py-10' },
    { text: 'Contact', className: 'py-10' },
]

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center">
            <Box className="w-full lg:w-5/6 lg:pl-[15%] grid grid-cols-2 lg:grid-cols-3 gap-10">
                {gridData.map((col) => (
                    <Box key={col.text} className={col.className}>
                        <H3>{col.text}</H3>
                    </Box>
                ))}
            </Box>
            Dorijana s.r.o. © 2002-2025
        </footer>
    )
}
