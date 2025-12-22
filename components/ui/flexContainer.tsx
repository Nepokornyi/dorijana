import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import {
    Direction,
    Gap,
    HorizontalAlign,
    MinHeight,
    VerticalAlign,
} from '../types/flexTypes'

type FlexContainerProps = ComponentPropsWithoutRef<'div'> & {
    children: ReactNode
    direction?: Direction
    minHeight?: MinHeight
    justifyContent?: HorizontalAlign
    alignItems?: VerticalAlign
    width?: string
    center?: boolean
    gap?: Gap
    className?: string
    id?: string
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
}

export const FlexContainer = forwardRef<HTMLDivElement, FlexContainerProps>(
    (
        {
            children,
            direction = 'flex-row',
            minHeight = 'min-h-auto',
            justifyContent,
            alignItems,
            width = 'w-full',
            center = false,
            gap = 'gap-0',
            className = '',
            id,
            onClick,
            ...rest
        },
        ref
    ) => {
        const horizontalAlignClass =
            justifyContent || (center ? 'justify-center' : '')
        const verticalAlignClass = alignItems || (center ? 'items-center' : '')

        const combinedClasses = [
            'flex',
            width,
            direction,
            horizontalAlignClass,
            verticalAlignClass,
            gap,
            minHeight,
            className,
        ]
            .filter(Boolean)
            .join(' ')

        return (
            <div
                ref={ref}
                className={combinedClasses}
                id={id}
                onClick={onClick}
                {...rest}
            >
                {children}
            </div>
        )
    }
)

FlexContainer.displayName = 'FlexContainer'
