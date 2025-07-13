import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { H2 } from '@/components/ui/typography'
import React from 'react'
import { ThemeChange } from './Landing/ThemeChange'

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-10">
            <H2 className="uppercase tracking-widest border-none text-white">
                dorijana
            </H2>
            <Box className="hidden lg:block">
                <Button className="text-white" variant={'link'}>
                    Live
                </Button>
                <Button className="text-white" variant={'link'}>
                    Work
                </Button>
                <Button className="text-white" variant={'link'}>
                    Relax
                </Button>
                <Button className="text-white" variant={'link'}>
                    Care
                </Button>
            </Box>
            <Box className="flex flex-col md:flex-row">
                <Button className="text-white" variant={'link'}>
                    About
                </Button>
                <Button className="text-white" variant={'link'}>
                    News
                </Button>
                <Button className="text-white" variant={'link'}>
                    Contact
                </Button>
                <Button className="text-white" variant={'link'}>
                    Projects
                </Button>
                <ThemeChange />
            </Box>
        </header>
    )
}
