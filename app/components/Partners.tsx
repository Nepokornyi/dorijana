import React from 'react'
import { Box } from '@/components/ui/box'
import { motion, Variants } from 'motion/react'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { useTranslations } from 'next-intl'

import { MetrostavLogo } from '@/assets/partners/Metrostav'
import { CzechSonLogo } from '@/assets/partners/CzechSon'
import { PrumstavLogo } from '@/assets/partners/Prumstav'
import { SkanskaLogo } from '@/assets/partners/Skanska'
import { TrigemaLogo } from '@/assets/partners/Trigema'
import { CentralGroupLogo } from '@/assets/partners/CentralGroup'

const MotionBox = motion(Box)

const PARTNERS_GRID_CLASSES = [
    'py-10',
    'py-10',
    'py-10 flex justify-end hidden lg:block lg:justify-self-end',
]

const partnersConfig = [
    { logo: MetrostavLogo, altKey: 'metrostav' as const, className: '' },
    { logo: CzechSonLogo, altKey: 'czechSon' as const, className: '' },
    { logo: PrumstavLogo, altKey: 'prumstav' as const, className: 'lg:justify-end' },
    { logo: SkanskaLogo, altKey: 'skanska' as const, className: '' },
    { logo: TrigemaLogo, altKey: 'trigema' as const, className: '' },
    { logo: CentralGroupLogo, altKey: 'centralGroup' as const, className: 'lg:justify-end' },
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
    const t = useTranslations('partners')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]

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
                {gridTexts.map((text, i) => (
                    <Box key={text} className={PARTNERS_GRID_CLASSES[i] ?? ''}>
                        {text}
                    </Box>
                ))}
                {partnersConfig.map(({ logo: LogoComponent, altKey, className }) => (
                    <motion.div
                        key={altKey}
                        whileHover={{
                            y: -4,
                            scale: 1.02,
                            transition: { duration: 0.2, ease: 'easeOut' },
                        }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`flex opacity-80 hover:opacity-100 transition-opacity duration-200 ${className}`}
                    >
                        <LogoComponent className="w-full sm:w-52 h-auto grayscale hover:grayscale-0" aria-label={t(`alts.${altKey}`)} />
                    </motion.div>
                ))}
            </div>
        </MotionBox>
    )
}
