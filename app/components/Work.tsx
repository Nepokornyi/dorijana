import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P, TypographyMuted } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'

const gridData = [
    { text: 'Č. 02', className: 'px-10 lg:px-0 py-10' },
    { text: 'Proč Dorijana?', className: 'py-10' },
    {
        text: 'Naše služby',
        className: 'py-10 flex justify-end hidden lg:block lg:justify-self-end',
    },
]

const cardData = [
    {
        title: 'Kompletní Stavební Práce',
        text: 'Zajišťujeme kompletní stavební práce v Praze a okolí — od základů až po finální úpravy. Stavíme s jistotou, kvalitou a respektem k vašemu času i rozpočtu',
    },
    {
        title: 'Omítky a povrchové úpravy',
        text: 'Provádíme strojní sádrové, jádrové a stěrkové omítky s precizní rovinností a dlouhou životností. Vhodné pro nové stavby i rekonstrukce.',
    },
    {
        title: 'Zdivo a základové konstrukce',
        text: 'Realizujeme zděné konstrukce z cihel, Ytongu a tvárnic, stejně jako betonáž základových pasů a desek. Zajišťujeme přesnost, stabilitu a dodržení technologických postupů.',
    },
]

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delayChildren: stagger(0.33),
            delay: 0.33,
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
        opacity: 0.75,
        x: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        },
    },
}

const MotionBox = motion(Box)
const MotionFlexContainer = motion(FlexContainer)

export const Work = () => {
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionBox
            id="work"
            variants={parentVariants}
            initial="hidden"
            whileInView={animationsEnabled ? 'visible' : 'hidden'}
            className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10"
        >
            {gridData.map((col) => (
                <Box key={col.text} className={col.className}>
                    {col.text}
                </Box>
            ))}

            <MotionFlexContainer
                variants={textLeftVariants}
                direction="flex-col"
                gap="gap-10"
                className="px-10 lg:px-0 py-10 col-span-2 lg:col-span-1"
            >
                {cardData.map((card, index) => (
                    <Box key={index}>
                        <H3 className="pb-4">{card.title}</H3>
                        <P>{card.text}</P>
                    </Box>
                ))}

                <TypographyMuted className="uppercase py-4">
                    {'Chceš vědět víc'}?
                </TypographyMuted>

                <H2 className="w-fit">{'Kontaktuj nás'}</H2>
            </MotionFlexContainer>

            <MotionBox
                variants={textRightVariants}
                className="hidden lg:flex col-span-2 my-10 bg-black/25"
            >
                <VideoPlayer
                    src="/video2/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </MotionBox>
        </MotionBox>
    )
}
