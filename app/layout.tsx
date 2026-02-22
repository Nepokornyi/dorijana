import { headers } from 'next/headers'
import Script from 'next/script'
import { Gantari, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { routing } from '@/i18n/routing'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

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
                {GA_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script
                            id="google-analytics"
                            strategy="afterInteractive"
                        >
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_ID}');
                            `}
                        </Script>
                    </>
                )}
                {children}
            </body>
        </html>
    )
}
