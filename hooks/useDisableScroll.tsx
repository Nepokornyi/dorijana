import { useEffect } from 'react'
import { useLenis } from '@/contexts/lenis-context'

export const useDisableScroll = (disabled: boolean) => {
    const { lenis } = useLenis()

    useEffect(() => {
        if (!disabled) {
            lenis?.start()
            return
        }

        lenis?.stop()
        
        const preventScroll = (e: WheelEvent | TouchEvent) => {
            e.preventDefault()
        }

        window.addEventListener('wheel', preventScroll, { passive: false })
        window.addEventListener('touchmove', preventScroll, { passive: false })

        return () => {
            window.removeEventListener('wheel', preventScroll)
            window.removeEventListener('touchmove', preventScroll)
            lenis?.start()
        }
    }, [disabled, lenis])
}
