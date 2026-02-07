'use client'
import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'

const opacityTransition = {
    duration: 0.5,
    ease: 'easeInOut' as const,
}

const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isRoot = pathname === '/'

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
