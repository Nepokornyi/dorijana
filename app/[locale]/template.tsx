'use client'
import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'

const opacityTransition = {
    duration: 0.5,
    ease: 'easeInOut' as const,
}

function isLocaleHome(pathname: string): boolean {
    if (pathname === '/') return true
    const segments = pathname.replace(/^\//, '').split('/').filter(Boolean)
    return (
        segments.length === 1 &&
        routing.locales.includes(segments[0] as (typeof routing.locales)[number])
    )
}

const Template = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const pathname = usePathname()
    const isRoot = isLocaleHome(pathname)

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={isRoot ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                    isRoot
                        ? { duration: 0.3, ease: 'easeOut' }
                        : opacityTransition
                }
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Template
