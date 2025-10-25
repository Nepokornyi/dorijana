'use client'

import Lottie from 'lottie-react'
import logo from '@/assets/logo.json'
import { FlexContainer } from './ui/flexContainer'
import { motion, AnimatePresence } from 'framer-motion'

type LoaderProps = {
    fadeOut?: boolean
}

export const Loader = ({ fadeOut }: LoaderProps) => (
    <AnimatePresence>
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-black fixed inset-0 z-[9999] flex items-center justify-center"
        >
            <FlexContainer center>
                <Lottie
                    animationData={logo}
                    loop
                    autoplay
                    className="size-40"
                />
            </FlexContainer>
        </motion.div>
    </AnimatePresence>
)
