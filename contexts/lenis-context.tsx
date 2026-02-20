'use client'

import Lenis from 'lenis'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

interface ScrollToOptions {
    offset?: number
    lerp?: number
    duration?: number
    easing?: (t: number) => number
    immediate?: boolean
    lock?: boolean
    force?: boolean
    onComplete?: () => void
}

interface LenisContextType {
    lenis: Lenis | null
    scrollTo: (target: string | HTMLElement, options?: ScrollToOptions) => void
}

const LenisContext = createContext<LenisContextType>({
    lenis: null,
    scrollTo: () => {},
})

export const useLenis = () => useContext(LenisContext)

export const LenisProvider = ({ children }: { children: ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        const instance = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 2,
            infinite: false,
            prevent: (node) => node.classList.contains('lenis-prevent'),
        })

        setLenis(instance)

        const raf = (time: number) => {
            instance.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            instance.destroy()
        }
    }, [])

    const scrollTo = (
        target: string | HTMLElement,
        options?: ScrollToOptions,
    ) => {
        if (!lenis) return
        lenis.scrollTo(target, {
            offset: -80, // Adjust based on your header height
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            ...options,
        })
    }

    return (
        <LenisContext.Provider value={{ lenis, scrollTo }}>
            {children}
        </LenisContext.Provider>
    )
}
