import { forwardRef, ReactNode } from 'react'

type BoxProps = React.ComponentPropsWithoutRef<'div'> & {
    children: ReactNode
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, className = '', onClick, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                onClick={onClick}
                className={`relative ${className}`}
                {...rest}
            >
                {children}
            </div>
        )
    }
)

Box.displayName = 'Box'
