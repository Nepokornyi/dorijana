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

/** Images and layout only; text comes from locale (projects). */
export const PROJECT_IMAGES: ReadonlyArray<{
    image: typeof dock
    span?: boolean
}> = [
    { image: dock },
    { image: harfa },
    { image: suomi },
    { image: jarov },
    { image: visionary, span: true },
]
