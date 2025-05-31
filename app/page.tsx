'use client'
import { Button } from '@/components/ui/button'
import { useCallback } from 'react'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function Home() {
    const toggleDarkMode = useCallback(() => {
        const html = document.documentElement
        html.classList.toggle('dark')
    }, [])

    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Button variant={'secondary'} onClick={() => toggleDarkMode()}>
                Theme
            </Button>
            <Landing />
            <About />
            <Work />
            <Projects />
            <Contact />
        </div>
    )
}
