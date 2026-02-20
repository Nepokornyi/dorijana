import { forwardRef, ReactNode } from 'react'

type TypographyProps = {
    children: ReactNode
    fontSize?: string
    className?: string
}

export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <h1
                ref={ref}
                className={`${className} scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl`}
            >
                {children}
            </h1>
        )
    },
)

export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <h2
                ref={ref}
                className={`${className} scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0`}
            >
                {children}
            </h2>
        )
    },
)

export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ children, fontSize = 'text-2xl', className }, ref) => {
        return (
            <h3
                ref={ref}
                className={`${className} ${fontSize} scroll-m-20 font-semibold tracking-tight`}
            >
                {children}
            </h3>
        )
    },
)

export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <h4
                ref={ref}
                className={`${className} scroll-m-20 text-xl font-semibold tracking-tight`}
            >
                {children}
            </h4>
        )
    },
)

export const P = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, className }, ref) => {
        // [&:not(:first-child)]:mt-6
        return (
            <p ref={ref} className={`${className} leading-7`}>
                {children}
            </p>
        )
    },
)

export const InlineCode = forwardRef<HTMLElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <code
                ref={ref}
                className={`${className} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`}
            >
                {children}
            </code>
        )
    },
)

export const TypographyLead = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <p
                ref={ref}
                className={`${className} text-xl text-muted-foreground`}
            >
                {children}
            </p>
        )
    },
)

export const TypographyLarge = forwardRef<HTMLDivElement, TypographyProps>(
    ({ children, className }, ref) => {
        return (
            <div ref={ref} className={`${className} text-lg font-semibold`}>
                {children}
            </div>
        )
    },
)

export const TypographySmall = forwardRef<HTMLElement, TypographyProps>(
    ({ children, fontSize = 'text-sm', className }, ref) => {
        return (
            <small
                ref={ref}
                className={`${className} ${fontSize} font-medium leading-none`}
            >
                {children}
            </small>
        )
    },
)

export const TypographyMuted = forwardRef<
    HTMLParagraphElement,
    TypographyProps
>(({ children, className }, ref) => {
    return (
        <p ref={ref} className={`${className} text-sm text-muted-foreground`}>
            {children}
        </p>
    )
})

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
P.displayName = 'P'
InlineCode.displayName = 'InlineCode'
TypographyLead.displayName = 'TypographyLead'
TypographyLarge.displayName = 'TypographyLarge'
TypographySmall.displayName = 'TypographySmall'
TypographyMuted.displayName = 'TypographyMuted'
