import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { H2, H3, P } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'
import { useAnimationsEnabled } from '@/contexts/animation-context'
import { motion, stagger, Variants } from 'motion/react'

const gridData = [
    { text: 'Nr. 03', className: 'px-10 lg:px-0 py-10' },
    { text: 'The perks of owning an ark', className: 'py-10' },
    {
        text: 'Specific features',
        className: 'hidden lg:block py-10 flex justify-end',
    },
]

const cardData = [
    {
        title: 'Podlahové konstrukce',
        text: 'Zhotovujeme podlahy pro domácnosti i průmyslové objekty. Každá realizace splňuje požadavky přesnosti podle ČSN 744505.',
    },
    {
        title: 'Fasády a zateplení',
        text: 'Postaráme se o kompletní zateplení a revitalizaci fasád – od projekční přípravy až po finální povrch. Pracujeme s certifikovanými systémy a zaručujeme dlouhou životnost.',
    },
    {
        title: 'Sádrokartonové práce',
        text: 'Montujeme příčky, podhledy, vestavby a půdní prostory včetně izolací. Sádrokartonové konstrukce zaručují precizní výsledek a krátkou dobu montáže.',
    },
]

const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            delayChildren: stagger(0.75),
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

const MotionBox = motion(Box)
const MotionFlexContainer = motion(FlexContainer)
const MotionH2 = motion(H2)

export const Projects = () => {
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionBox
            id="projects"
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
            <MotionH2
                variants={textLeftVariants}
                className="border-none col-span-3 px-10 lg:px-0 py-10 leading-12"
            >
                Naše stavební realizace vynikají precizním zpracováním,
                ověřenými technologiemi a kvalitními materiály. Díky tomu
                garantujeme dlouhou životnost, vysoký komfort a profesionální
                výsledek v každém detailu.
            </MotionH2>

            <MotionFlexContainer
                variants={textLeftVariants}
                direction="flex-col"
                gap="gap-10"
                className="px-10 lg:px-0 py-10 col-span-2 lg:col-span-1 lg:col-start-1"
            >
                {cardData.map((card, index) => (
                    <FlexContainer direction="flex-col" gap="gap-4" key={index}>
                        <H3>{card.title}</H3>
                        <P>{card.text}</P>
                    </FlexContainer>
                ))}
            </MotionFlexContainer>

            <MotionBox
                variants={textRightVariants}
                className="hidden lg:block col-span-2 relative my-10 pr-20 -mr-[12.5vw] bg-black/35"
            >
                <VideoPlayer
                    src="/video5/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </MotionBox>
        </MotionBox>
    )
}
