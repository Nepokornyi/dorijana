import React, { useEffect, useState } from 'react'
import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { AnimatePresence, motion } from 'motion/react'

import brovos from '@/assets/logos/brovos.png'
import czechSon from '@/assets/logos/czech&son.png'
import metrostav from '@/assets/logos/metrostav.png'
import pms from '@/assets/logos/pms.png'
import prumstav from '@/assets/logos/prumstav.png'
import skanska from '@/assets/logos/skanska.png'
import trigema from '@/assets/logos/trigema.png'
import Image from 'next/image'

const MotionBox = motion(Box)

const logoSets = [
    [brovos, czechSon],
    [metrostav, pms, trigema],
    [prumstav, skanska],
]

export const Partners = () => {
    const [currentIndices, setCurrentIndices] = useState(Array(6).fill(0))

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
                            logoSets[cellIndex].length
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
        <MotionBox className="px-10 lg:px-32 xl:px-60 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {logoSets.map((logos, cellIndex) => (
                    <div key={cellIndex} className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
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
                                    src={logos[currentIndices[cellIndex]]}
                                    alt="logo"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </MotionBox>
    )
}
