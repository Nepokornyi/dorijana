import { ReactNode } from 'react'

export function H1({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h1
            className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
        >
            {children}
        </h1>
    )
}

export function H2({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h2
            className={`${className} scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
        >
            {children}
        </h2>
    )
}

export function H3({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h3
            className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight`}
        >
            {children}
        </h3>
    )
}

export function H4({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h4
            className={`${className} scroll-m-20 text-xl font-semibold tracking-tight`}
        >
            {children}
        </h4>
    )
}

export function P({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    // [&:not(:first-child)]:mt-6
    return <p className={`${className} leading-7`}>{children}</p>
}

export function InlineCode({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <code
            className={`${className} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`}
        >
            {children}
        </code>
    )
}

export function TypographyLead({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p className={`${className} text-xl text-muted-foreground`}>
            {children}
        </p>
    )
}

export function TypographyLarge({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={`${className} text-lg font-semibold`}>{children}</div>
    )
}

export function TypographySmall({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <small className={`${className} text-sm font-medium leading-none`}>
            {children}
        </small>
    )
}

export function TypographyMuted({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p className={`${className} text-sm text-muted-foreground`}>
            {children}
        </p>
    )
}
