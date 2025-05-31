import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { H2 } from '@/components/ui/typography'
import React from 'react'
import { ThemeChange } from './Landing/ThemeChange'

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-10">
            <H2 className="uppercase tracking-widest border-none">dorijana</H2>
            <Box>
                <Button variant={'link'}>Live</Button>
                <Button variant={'link'}>Work</Button>
                <Button variant={'link'}>Relax</Button>
                <Button variant={'link'}>Care</Button>
            </Box>
            <Box>
                <Button variant={'link'}>About</Button>
                <Button variant={'link'}>News</Button>
                <Button variant={'link'}>Contact</Button>
                <Button variant={'link'}>Projects</Button>
                <ThemeChange />
            </Box>
        </header>
    )
}
