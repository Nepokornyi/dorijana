'use client'

import { Box } from '@/components/ui/box'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'
import { PROJECT_IMAGES } from './projects-showcase-data'
import { ProjectShowcaseCard } from './ProjectShowcaseCard'
import type { ProjectItem } from './projects-showcase-data'

const SHOWCASE_GRID_CLASSES = [
    'pt-10 pb-5',
    'pt-10 pb-5',
    'pt-10 pb-5 flex justify-end hidden lg:block lg:justify-self-end',
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
    const t = useTranslations('showcase')
    const animationsEnabled = useAnimationsEnabled()
    const gridTexts = t.raw('grid') as string[]
    const localeProjects = t.raw('projects') as Array<{
        title: string
        description: string
        works: string[]
        span?: boolean
    }>

    const projects: ProjectItem[] = localeProjects.map((p, i) => ({
        ...p,
        image: PROJECT_IMAGES[i]!.image,
        span: PROJECT_IMAGES[i]?.span ?? p.span,
    }))

    return (
        <MotionBox
            id="projects-showcase"
            variants={containerVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="px-10 lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-5"
        >
            {gridTexts.map((text, i) => (
                <Box key={text} className={SHOWCASE_GRID_CLASSES[i] ?? ''}>
                    {text}
                </Box>
            ))}
            {projects.map((project) => (
                <ProjectShowcaseCard
                    key={project.title}
                    project={project}
                    animationsEnabled={animationsEnabled}
                />
            ))}
        </MotionBox>
    )
}
