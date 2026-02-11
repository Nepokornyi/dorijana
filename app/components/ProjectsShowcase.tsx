'use client'

import Image from 'next/image'
import { Box } from '@/components/ui/box'
import { H3, TypographySmall } from '@/components/ui/typography'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, Variants } from 'motion/react'

import dock from '@/assets/carousel/dock.jpg'
import harfa from '@/assets/carousel/harfa.jpg'
import jarov from '@/assets/carousel/jarov.jpg'
import suomi from '@/assets/carousel/suomi.jpg'
import visionary from '@/assets/carousel/visionary.jpg'

const projectItems: ReadonlyArray<{
    title: string
    image: typeof dock
    span?: boolean
    description: string
    works: ReadonlyArray<string>
}> = [
    {
        title: 'Dock',
        image: dock,
        description:
            'Dock in je město ve městě na Praze 8 s obchody, kavárnami, restaurací, školkou i vlastním přístavem.',
        works: [
            'STROJNÍ SÁDROVÉ OMÍTKY',
            'STROJNÍ STĚRKOVÉ OMÍTKY',
            'KONSTRUKCE PODLAH',
        ],
    },
    {
        title: 'Harfa Design',
        image: harfa,
        description:
            'Designový bytový dům přímo vedle obchodního centra Galerie Harfa, kousek od stanice metra B Českomoravská.',
        works: ['STROJNÍ JÁDROVÉ OMÍTKY', 'STROJNÍ STĚRKOVÉ OMÍTKY'],
    },
    {
        title: 'Suomi',
        image: suomi,
        description:
            'Rezidenční čtvrť SUOMI Hloubětín v dynamicky se rozvíjející části Prahy 9.',
        works: [
            'STROJNÍ SÁDROVÉ OMÍTKY',
            'STROJNÍ STĚRKOVÉ OMÍTKY',
            'KONSTRUKCE PODLAH',
            'VYZDÍVKY',
        ],
    },
    {
        title: 'Auto Jarov',
        image: jarov,
        description: 'Největší obchodní dům automobilů v České republice.',
        works: ['STROJNÍ STĚRKOVÉ OMÍTKY', 'KONSTRUKCE PODLAH'],
    },
    {
        title: 'Visionary',
        image: visionary,
        span: true,
        description:
            'Inovativní kancelářská budova Visionary nacházející se v pražských Holešovicích.',
        works: ['STROJNÍ SÁDROVÉ OMÍTKY', 'STROJNÍ STĚRKOVÉ OMÍTKY'],
    },
]

const titleData = [
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
            {titleData.map((col) => (
                <Box key={col.text} className={col.className}>
                    {col.text}
                </Box>
            ))}
            {projectItems.map((item) => (
                <MotionBox
                    key={item.title}
                    variants={cardVariants}
                    className={`group relative overflow-hidden h-80 bg-muted ${
                        item.span ? 'col-span-2' : 'col-span-2 md:col-span-1'
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
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/35 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-start p-5 lg:p-2.5 xl:p-5">
                        <H3 className="text-white border-none pb-0 font-semibold drop-shadow-sm group-hover:translate-y-0 transition-transform duration-300 ease-out">
                            {item.title}
                        </H3>
                        <div className="pointer-events-none absolute inset-x-5 lg:inset-x-2.5 xl:inset-x-5 bottom-5 translate-y-4 lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-75">
                            <TypographySmall className="text-white/90 max-h-16 overflow-hidden">
                                {item.description}
                            </TypographySmall>
                            <ul className="mt-2 flex flex-wrap gap-1.5">
                                {item.works.map((work) => (
                                    <li
                                        key={work}
                                        className="bg-black/40 px-2 py-1"
                                    >
                                        <TypographySmall className="text-[10px] tracking-wide uppercase text-white/90">
                                            {work}
                                        </TypographySmall>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MotionBox>
            ))}
        </MotionBox>
    )
}
