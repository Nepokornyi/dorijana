import { useEffect } from 'react'
import { useLenis } from '@/contexts/lenis-context'

export const useDisableScroll = (disabled: boolean) => {
    const { lenis } = useLenis()

    useEffect(() => {
        if (!disabled) return lenis?.start()

        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        lenis?.stop()

        return () => {
            document.body.style.overflow = prev
            lenis?.start()
        }
    }, [disabled, lenis])
}
