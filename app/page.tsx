'use client'
import { Landing } from './components/Landing/Landing'
import { Intro } from './components/Intro'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Carousel } from './components/Carousel'
import { Loader } from '@/components/Loader'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'

export default function Home() {
    const [mounted, setMounted] = useState(true)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 2600)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="font-[family-name:var(--font-geist-mono)] relative">
            <Header />
            {mounted && (
                <Loader visible={visible} onFinish={() => setMounted(false)} />
            )}
            <Landing />
            <Intro />
            <About />
            <Work />
            <Carousel />
            <Projects />
            <Footer />
        </div>
    )
}
