import React, { ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: string
    onClick?: () => void
}

export const Box = ({ children, className = '', onClick }: BoxProps) => {
    return (
        <div onClick={onClick} className={`relative ${className}`}>
            {children}
        </div>
    )
}
