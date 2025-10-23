import { Box } from '@/components/ui/box'
import { H3, P } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'

import image from '@/assets/about.jpg'

const gridData = [
    { text: 'Nr. 01' },
    { text: "What's Dorijana" },
    { text: 'New way of building', className: 'hidden lg:block' },
]

export const About = () => {
    return (
        <>
            <Box className="w-full lg:w-5/6 lg:pl-[15%] grid grid-cols-2 lg:grid-cols-3 gap-10">
                {gridData.map((col) => (
                    <Box
                        key={col.text}
                        className={`px-10 lg:px-20 py-10 ${col.className}`}
                    >
                        {col.text}
                    </Box>
                ))}
            </Box>
            <Box className="w-5/6 lg:pl-[15%] grid grid-cols-1 lg:grid-cols-3 gap-10">
                <H3 className="hidden lg:block px-20 py-10">
                    {"What's Dorijana?"}
                </H3>
                <H3 className="px-10 lg:px-20 py-10 lg:col-span-2">
                    {
                        'Dorijana equals modular, mobile architecture; creating prefabricated, fully finished, modular units. By a lake, deep in a forest, at the edge of a field, a steep mountain hill or your city rooftop! Make your dream come true, installed in one day, limiting on-site work to the bare minimum.'
                    }
                </H3>
                <P className="pl-10 lg:pl-20 pb-10 lg:col-start-2">
                    {
                        'Our shelters are built in one piece by a team of craftsmen in our factory, which gives the incredible mobility to reach almost any location. Ideal production conditions allow us to achieve the highest detail and reduce production time. In doing so, we realize your dream project on time, on budget and with the highest possible quality.'
                    }
                </P>
                <P className="pl-10 lg:pl-20 pb-10 lg:col-start-3">
                    {
                        'Modularity ensures that your Dorijana can grow over time, following evolving family needs, business growth or new recreational desires. Still by being immersed in the natural environment, but without interrupting the ongoing business.'
                    }
                </P>
            </Box>
            <Box className="relative w-full h-[50vh]">
                <Image
                    src={image}
                    alt="dorijana building background"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </>
    )
}
