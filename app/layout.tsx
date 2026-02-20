import { headers } from 'next/headers'
import { Gantari, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { routing } from '@/i18n/routing'

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const headersList = await headers()
    const locale =
        headersList.get('x-next-intl-locale') ?? routing.defaultLocale

    return (
        <html lang={locale} className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${gantariSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
