'use client'

import { createContext, ReactNode, useContext } from 'react'

const AnimationContext = createContext(false)

export const AnimationProvider = ({
    enabled,
    children,
}: {
    enabled: boolean
    children: ReactNode
}) => {
    return (
        <AnimationContext.Provider value={enabled}>
            {children}
        </AnimationContext.Provider>
    )
}

export const useAnimationsEnabled = () => useContext(AnimationContext)
