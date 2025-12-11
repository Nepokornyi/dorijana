import { Box } from '@/components/ui/box'
import { FlexContainer } from '@/components/ui/flexContainer'
import { TypographyMuted } from '@/components/ui/typography'

const gridData = [
    {
        header: 'Dorijana',
        text: 'Dorijana s.r.o. je pražská stavební společnost, která provádí stavební zakázky ve vysoké kvalitě s velkým důrazem na detaily.',
        className: '',
    },
    {
        header: 'Kontaktujte nás',
        points: [
            'info@dorijana.cz',
            '+420 777 700 202',
            'K Červenému dvoru 175/18a',
            'Strašnice, 100 00 Praha 10',
        ],
        className: '',
    },
    {
        header: 'Důležité odkazy',
        text: 'Podmínky ochrany osobních údajů',
        link: 'https://dorijana.cz/podminky-ochrany-osobnich-udaju.html',
        className: '',
    },
]

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center py-5">
            <Box className="w-full lg:px-32 xl:px-60 grid grid-cols-2 lg:grid-cols-3 gap-10">
                {gridData.map((col, index) => (
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-4"
                        key={index}
                        className={`${col.className} 'px-10 lg:px-0 py-10`}
                    >
                        <TypographyMuted className="text-white">
                            {col.header}
                        </TypographyMuted>
                        {col.text && !col.link && (
                            <TypographyMuted className="text-white">
                                {col.text}
                            </TypographyMuted>
                        )}
                        {col.text && col.link && (
                            <a href={col.link}>
                                <TypographyMuted className="text-white">
                                    {col.text}
                                </TypographyMuted>
                            </a>
                        )}
                        <ul>
                            {col.points?.map((point, index) => (
                                <li key={index}>
                                    <TypographyMuted className="text-white">
                                        {point}
                                    </TypographyMuted>
                                </li>
                            ))}
                        </ul>
                    </FlexContainer>
                ))}
            </Box>
            <TypographyMuted> Dorijana s.r.o. © 2002-2025</TypographyMuted>
        </footer>
    )
}
