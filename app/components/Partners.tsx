import React, { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { useAnimationsEnabled } from '@/contexts/animation-context'

import brovos from '@/assets/partners/brovos.png'
import czechSon from '@/assets/partners/czech&son.png'
import metrostav from '@/assets/partners/metrostav.png'
import pms from '@/assets/partners/pms.png'
import prumstav from '@/assets/partners/prumstav.png'
import skanska from '@/assets/partners/skanska.png'
import trigema from '@/assets/partners/trigema.png'
import Image from 'next/image'

const MotionBox = motion(Box)

const logoSets = [
    {
        logos: [brovos, czechSon],
        align: 'justify-start',
    },
    {
        logos: [metrostav, pms, trigema],
        align: 'justify-start',
    },
    {
        logos: [prumstav, skanska],
        align: 'justify-end',
    },
]

const titleData = [
    { text: 'Č. 03', className: 'px-10 lg:px-0 py-10' },
    { text: 'Spolupráce', className: 'py-10' },
    {
        text: 'Naši partneři',
        className: 'py-10 flex justify-end hidden lg:block lg:justify-self-end',
    },
]

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delay: 0.33,
        },
    },
}

export const Partners = () => {
    const animationsEnabled = useAnimationsEnabled()
    const [currentIndices, setCurrentIndices] = useState(
        Array(logoSets.length).fill(0)
    )

    useEffect(() => {
        const intervals = logoSets.map((_, cellIndex) => {
            const delay = cellIndex * 400
            const intervalDuration = 3000 + cellIndex * 1200

            return setTimeout(() => {
                const interval = setInterval(() => {
                    setCurrentIndices((prev) => {
                        const newIndices = [...prev]
                        newIndices[cellIndex] =
                            (newIndices[cellIndex] + 1) %
                            logoSets[cellIndex].logos.length
                        return newIndices
                    })
                }, intervalDuration)

                return interval
            }, delay)
        })

        return () => {
            intervals.forEach((timeout) => clearTimeout(timeout))
        }
    }, [])

    return (
        <MotionBox
            id="partners"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="px-10 lg:px-32 xl:px-60 py-10"
        >
            <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
                {titleData.map((col) => (
                    <Box key={col.text} className={col.className}>
                        {col.text}
                    </Box>
                ))}
                {logoSets.map((logoSet, cellIndex) => (
                    <Box
                        key={cellIndex}
                        className={`overflow-hidden flex ${logoSet.align}`}
                    >
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={currentIndices[cellIndex]}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: -20,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="text-7xl cursor-default"
                            >
                                <Image
                                    src={
                                        logoSet.logos[currentIndices[cellIndex]]
                                    }
                                    alt="logo"
                                />
                            </MotionBox>
                        </AnimatePresence>
                    </Box>
                ))}
            </div>
        </MotionBox>
    )
}
