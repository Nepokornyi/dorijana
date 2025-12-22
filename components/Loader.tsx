import Lottie from 'lottie-react'
import logo from '@/assets/logo.json'
import { FlexContainer } from './ui/flexContainer'
import { motion, AnimatePresence, Variants } from 'motion/react'

const wrapperVariants: Variants = {
    visible: { opacity: 1 },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
            when: 'afterChildren',
        },
    },
}

const logoVariants: Variants = {
    visible: { opacity: 1 },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
}

export const Loader = ({
    visible,
    onFinish,
}: {
    visible: boolean
    onFinish: () => void
}) => (
    <AnimatePresence>
        {visible && (
            <motion.div
                key="loader"
                variants={wrapperVariants}
                initial="visible"
                animate="visible"
                exit="hidden"
                onAnimationComplete={(definition) => {
                    if (definition === 'hidden') onFinish()
                }}
                className="bg-black fixed inset-0 z-[9999] flex items-center justify-center"
            >
                <FlexContainer center>
                    <motion.div variants={logoVariants}>
                        <Lottie
                            animationData={logo}
                            loop
                            autoplay
                            className="size-40"
                        />
                    </motion.div>
                </FlexContainer>
            </motion.div>
        )}
    </AnimatePresence>
)
