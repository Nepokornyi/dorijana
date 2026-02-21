import Image from 'next/image'
import { H3, TypographySmall } from '@/components/ui/typography'
import { motion, Variants } from 'motion/react'
import { Box } from '@/components/ui/box'
import type { ProjectItem } from './projects-data'

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

const MotionBox = motion(Box)

type ProjectCardProps = Readonly<{
    project: ProjectItem
    animationsEnabled: boolean
}>

export const ProjectCard = ({
    project,
    animationsEnabled,
}: ProjectCardProps) => (
    <MotionBox
        key={project.title}
        variants={cardVariants}
        className={`group relative overflow-hidden h-80 bg-muted ${
            project.span ? 'col-span-2' : 'col-span-2 md:col-span-1'
        }`}
        whileHover={animationsEnabled ? { scale: 1.02 } : undefined}
        transition={{
            type: 'tween',
            duration: 0.35,
            ease: 'easeOut',
        }}
    >
        <div className="absolute inset-0">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-start p-5 lg:p-2.5 xl:p-5">
            <H3 className="text-white border-none pb-0 drop-shadow-sm group-hover:translate-y-0 transition-transform duration-300 ease-out">
                {project.title}
            </H3>
            <div className="pointer-events-none absolute inset-x-5 lg:inset-x-2.5 xl:inset-x-5 bottom-5 lg:translate-y-4 lg:opacity-0 group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-out delay-75">
                <TypographySmall className="text-white/90 max-h-16 overflow-hidden">
                    {project.description}
                </TypographySmall>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.works.map((work) => (
                        <li key={work} className="bg-black/40 px-2 py-1">
                            <TypographySmall className="text-[10px] tracking-wide uppercase text-white/90">
                                {work}
                            </TypographySmall>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </MotionBox>
)
