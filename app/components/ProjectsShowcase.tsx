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
}> = [
    { title: 'Dock', image: dock, span: true },
    { title: 'Harfa Design', image: harfa },
    { title: 'Suomi', image: suomi },
    { title: 'Auto Jarov', image: jarov },
    { title: 'Visionary', image: visionary },
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

const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
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
            viewport={{ once: true, amount: 0.15 }}
            className="w-full px-10 lg:px-32 xl:px-60 py-16 lg:py-24"
        >
            <motion.div
                variants={gridVariants}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[minmax(200px,28vh)]"
            >
                {projectItems.map((item, index) => (
                    <MotionBox
                        key={item.title}
                        variants={cardVariants}
                        className={`group relative overflow-hidden bg-muted ${
                            item.span
                                ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1'
                                : ''
                        }`}
                        whileHover={
                            animationsEnabled ? { scale: 1.02 } : undefined
                        }
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
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                            <H3 className="text-white border-none pb-0 font-semibold drop-shadow-sm group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                {item.title}
                            </H3>
                            <TypographySmall className="text-white/90 mt-1 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-75">
                                Projekt #{index + 1}
                            </TypographySmall>
                        </div>
                    </MotionBox>
                ))}
            </motion.div>
        </MotionBox>
    )
}
