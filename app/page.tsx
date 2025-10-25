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

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer1 = setTimeout(() => setFadeOut(true), 2500)
        const timer2 = setTimeout(() => setLoading(false), 3200)
        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [])

    return (
        <div className="font-[family-name:var(--font-geist-mono)] relative">
            {loading && <Loader fadeOut={fadeOut} />}
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
