import type { Metadata } from 'next'
import { Gantari, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const gantariSans = Gantari({
    variable: '--font-gantari-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Dorijana',
    description: 'Costruction company in czech republic',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${gantariSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
