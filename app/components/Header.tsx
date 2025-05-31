import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div>logo</div>
            <div>
                <Button variant={'link'}>Live</Button>
                <Button variant={'link'}>Work</Button>
                <Button variant={'link'}>Relax</Button>
                <Button variant={'link'}>Care</Button>
            </div>
            <div>
                <Button variant={'link'}>About</Button>
                <Button variant={'link'}>News</Button>
                <Button variant={'link'}>Contact</Button>
                <Button variant={'link'}>Projects</Button>
            </div>
        </header>
    )
}
