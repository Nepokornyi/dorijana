'use client'
import { useEffect, useState } from 'react'
import { Loader } from '@/components/Loader'
import { Header } from './components/Header'
import { Landing } from './components/Landing/Landing'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Work } from './components/Work'
import { Partners } from './components/Partners'
import { Carousel } from './components/Carousel/Carousel'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { AnimationProvider } from '@/contexts/animation-context'
import { LenisProvider } from '@/contexts/lenis-context'

export default function Home() {
    const [mounted, setMounted] = useState(true)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 1300)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="font-sans relative">
            {mounted && (
                <Loader visible={visible} onFinish={() => setMounted(false)} />
            )}
            <LenisProvider>
                <AnimationProvider enabled={!mounted}>
                    <Header />
                    <Landing />
                    <Intro />
                    <About />
                    <Work />
                    <Partners />
                    <Projects />
                    <Footer />
                </AnimationProvider>
            </LenisProvider>
        </div>
    )
}
