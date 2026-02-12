import { useEffect } from 'react'
import { useLenis } from '@/contexts/lenis-context'

export const useDisableScroll = (enabled: boolean) => {
    const { lenis } = useLenis()

    useEffect(() => {
        if (!enabled) return

        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        lenis?.stop()

        return () => {
            document.body.style.overflow = prev
            lenis?.start()
        }
    }, [enabled, lenis])
}
