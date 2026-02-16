import React from 'react'
import { Box } from '@/components/ui/box'
import { motion, Variants } from 'motion/react'
import { useAnimationsEnabled } from '@/contexts/animation-context'

import { MetrostavLogo } from '@/assets/partners/Metrostav'
import { CzechSonLogo } from '@/assets/partners/CzechSon'
import { PrumstavLogo } from '@/assets/partners/Prumstav'
import { SkanskaLogo } from '@/assets/partners/Skanska'
import { TrigemaLogo } from '@/assets/partners/Trigema'
import { CentralGroupLogo } from '@/assets/partners/CentralGroup'

const MotionBox = motion(Box)

const titleData = [
    { text: 'Č. 03', className: 'py-10' },
    { text: 'Spolupráce', className: 'py-10' },
    {
        text: 'Naši partneři',
        className: 'py-10 flex justify-end hidden lg:block lg:justify-self-end',
    },
]

const partners = [
    {
        logo: MetrostavLogo,
        alt: 'Metrostav',
        className: '',
    },
    {
        logo: CzechSonLogo,
        alt: 'Czech & Son',
        className: '',
    },
    {
        logo: PrumstavLogo,
        alt: 'Průmstav',
        className: 'lg:justify-end',
    },
    {
        logo: SkanskaLogo,
        alt: 'Skanska',
        className: '',
    },
    {
        logo: TrigemaLogo,
        alt: 'Trigema',
        className: '',
    },
    {
        logo: CentralGroupLogo,
        alt: 'Central Group',
        className: 'lg:justify-end',
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

    return (
        <MotionBox
            id="partners"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="px-10 lg:px-32 xl:px-60"
        >
            <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
                {titleData.map((col) => (
                    <Box key={col.text} className={col.className}>
                        {col.text}
                    </Box>
                ))}
                {partners.map(({ logo: LogoComponent, alt, className }) => (
                    <motion.div
                        key={alt}
                        whileHover={{
                            y: -4,
                            scale: 1.02,
                            transition: { duration: 0.2, ease: 'easeOut' },
                        }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`flex opacity-80 hover:opacity-100 transition-opacity duration-200 ${className}`}
                    >
                        <LogoComponent className="w-full sm:w-52 h-auto grayscale hover:grayscale-0" />
                    </motion.div>
                ))}
            </div>
        </MotionBox>
    )
}
