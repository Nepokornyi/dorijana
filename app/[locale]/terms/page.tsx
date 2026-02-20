'use client'
import { H3, H4 } from '@/components/ui/typography'
import { Header } from '../../components/Header'
import { LenisProvider } from '@/contexts/lenis-context'
import { AnimationProvider } from '@/contexts/animation-context'
import { useMessages } from 'next-intl'

type Clause = {
    id: string
    content: string
    subItems?: string[]
}

function ClauseItem({ clause }: { clause: Clause }) {
    return (
        <li className="list-none py-2" value={clause.id}>
            <span className="mr-1.5 font-semibold">{clause.id}.</span>
            <span className="leading-7">{clause.content}</span>
            {clause.subItems && clause.subItems.length > 0 && (
                <ul className="my-2 ml-4 list-disc space-y-1 pl-4">
                    {clause.subItems.map((item, i) => (
                        <li key={i} className="leading-7">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default function TermsPage() {
    const messages = useMessages()
    const terms = messages.terms as
        | { pageTitle: string; sections: Array<{ title: string; clauses: Clause[] }> }
        | undefined

    if (!terms?.sections?.length) {
        return null
    }

    return (
        <div className="font-sans relative">
            <LenisProvider>
                <AnimationProvider enabled>
                    <Header />
                    <section className="relative flex flex-col w-full h-full justify-center items-center lg:px-32 xl:px-60 py-40 gap-10">
                        <H3>{terms.pageTitle}</H3>
                        {terms.sections.map((section, sectionIndex) => (
                            <article
                                key={sectionIndex}
                                className="w-full max-w-4xl"
                            >
                                <H4 className="my-2.5 text-center">
                                    {section.title}
                                </H4>
                                <ol className="space-y-0 list-none pl-0">
                                    {section.clauses.map((clause) => (
                                        <ClauseItem
                                            key={clause.id}
                                            clause={clause}
                                        />
                                    ))}
                                </ol>
                            </article>
                        ))}
                    </section>
                </AnimationProvider>
            </LenisProvider>
        </div>
    )
}
