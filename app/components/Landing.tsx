import React from 'react'
import { Header } from './Header'
import { H1, H3 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

export const Landing = () => {
    return (
        <div>
            <Header />
            <Button>Check out our feature news</Button>
            <H1>A new way of building</H1>
            <H3>Quick and closer to nature</H3>
        </div>
    )
}
