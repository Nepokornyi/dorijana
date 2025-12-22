import { Button } from '@/components/ui/button'

import React, { useCallback } from 'react'

export const ThemeChange = () => {
    const toggleDarkMode = useCallback(() => {
        const html = document.documentElement
        html.classList.toggle('dark')
    }, [])

    return (
        <Button variant={'default'} onClick={() => toggleDarkMode()}>
            Theme
        </Button>
    )
}
