import { ReactNode } from 'react'

export function H1({ children }: { children: ReactNode }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export function H2({ children }: { children: ReactNode }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export function H3({ children }: { children: ReactNode }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

export function H4({ children }: { children: ReactNode }) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export function P({ children }: { children: ReactNode }) {
    return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export function InlineCode({ children }: { children: ReactNode }) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    )
}

export function TypographyLead({ children }: { children: ReactNode }) {
    return <p className="text-xl text-muted-foreground">{children}</p>
}

export function TypographyLarge({ children }: { children: ReactNode }) {
    return <div className="text-lg font-semibold">{children}</div>
}

export function TypographySmall({ children }: { children: ReactNode }) {
    return (
        <small className="text-sm font-medium leading-none">{children}</small>
    )
}

export function TypographyMuted({ children }: { children: ReactNode }) {
    return <p className="text-sm text-muted-foreground">{children}</p>
}
