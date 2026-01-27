import { Box } from '@/components/ui/box'
import { H3, P } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'

const gridData = [
    { text: 'Č. 01' },
    { text: 'Kdo jsme?' },
    { text: 'Stavební Vize', className: 'hidden lg:block lg:justify-self-end' },
]

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delayChildren: stagger(0.33),
        },
    },
}

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const textLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const textRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const MotionBox = motion.create(Box)
const MotionH3 = motion.create(H3)
const MotionP = motion.create(P)

export const About = () => {
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionBox
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            viewport={{ once: false, amount: 0.2 }}
        >
            <MotionBox
                variants={titleVariants}
                id="about"
                className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {gridData.map((col) => (
                    <Box
                        key={col.text}
                        className={`px-10 lg:px-0 py-10 ${col.className}`}
                    >
                        {col.text}
                    </Box>
                ))}
            </MotionBox>
            <MotionBox className="w-full lg:px-32 xl:px-60 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-2.5">
                <MotionH3
                    variants={textLeftVariants}
                    className="hidden lg:block px-10 lg:px-0 py-10"
                >
                    {'Kdo jsme?'}
                </MotionH3>
                <MotionH3
                    variants={textRightVariants}
                    className="px-10 lg:px-0 py-10 lg:col-span-2 lg:text-justify"
                >
                    {
                        'Jsme stavební společnost z Prahy zaměřená na kompletní realizaci stavebních prací. Naši odborníci spojují dlouholeté zkušenosti s moderním přístupem, díky čemuž nabízíme ucelená řešení pro každý projekt — od hrubé stavby až po finální dokončení.'
                    }
                </MotionH3>
                <MotionP
                    variants={textLeftVariants}
                    className="pl-10 lg:pl-0 lg:col-start-2 lg:text-justify"
                >
                    {
                        'Ke každé zakázce přistupujeme zodpovědně, otevřeně a s respektem k potřebám klienta. Garantujeme férové jednání, vysokou kvalitu provedení a dodržení sjednaných termínů i cen. Žádné skryté vícepráce, žádná překvapení — na vše poskytujeme záruku 60 měsíců.'
                    }
                </MotionP>
                <MotionP
                    variants={textRightVariants}
                    className="pl-10 lg:pl-10 lg:col-start-3 lg:text-justify"
                >
                    {
                        'Dbáme na kvalitu vlastní práce, stejně jako na výběr dodavatelů a materiálů Máme všechna potřebná oprávnění a certifikáty pro stavební činnost a jsme členy Hospodářské komory hlavního města Prahy.'
                    }
                </MotionP>
            </MotionBox>
            <Box className="relative w-full h-[50vh] bg-black/35">
                <VideoPlayer
                    src="/video3/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </Box>
        </MotionBox>
    )
}
