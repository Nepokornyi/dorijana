'use client'

import { Box } from '@/components/ui/box'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variants } from 'motion/react'
import { PROJECT_ITEMS } from './projects-showcase-data'
import { ProjectShowcaseCard } from './ProjectShowcaseCard'

export const gridData = [
    { text: 'Č. 05', className: 'py-20' },
    { text: 'Realizace', className: 'py-20' },
    {
        text: 'Vybrané stavební projekty',
        className: 'py-20 flex justify-end hidden lg:block lg:justify-self-end',
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delayChildren: 0.2,
            staggerChildren: 0.12,
        },
    },
}

const MotionBox = motion(Box)

export const ProjectsShowcase = () => {
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionBox
            id="projects-showcase"
            variants={containerVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="px-10 lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-5"
        >
            {gridData.map((col) => (
                <Box key={col.text} className={col.className}>
                    {col.text}
                </Box>
            ))}
            {PROJECT_ITEMS.map((project) => (
                <ProjectShowcaseCard
                    key={project.title}
                    project={project}
                    animationsEnabled={animationsEnabled}
                />
            ))}
        </MotionBox>
    )
}
