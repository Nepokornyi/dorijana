'use client'

import { Box } from '@/components/ui/box'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variants } from 'motion/react'
import { useTranslations } from 'next-intl'
import { PROJECT_IMAGES } from './projects-data'
import { ProjectCard } from './ProjectCard'
import type { ProjectItem } from './projects-data'

const PROJECTS_GRID_CLASSES = [
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

export const Projects = () => {
    const t = useTranslations('projects')
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
            id="projects"
            variants={containerVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            className="px-10 lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-5"
        >
            {gridTexts.map((text, i) => (
                <Box key={text} className={PROJECTS_GRID_CLASSES[i] ?? ''}>
                    {text}
                </Box>
            ))}
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    animationsEnabled={animationsEnabled}
                />
            ))}
        </MotionBox>
    )
}
