import dock from '@/assets/carousel/dock.jpg'
import harfa from '@/assets/carousel/harfa.jpg'
import jarov from '@/assets/carousel/jarov.jpg'
import suomi from '@/assets/carousel/suomi.jpg'
import visionary from '@/assets/carousel/visionary.jpg'

export type ProjectItem = Readonly<{
    title: string
    image: typeof dock
    span?: boolean
    description: string
    works: ReadonlyArray<string>
}>

export const PROJECT_ITEMS: ReadonlyArray<ProjectItem> = [
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
