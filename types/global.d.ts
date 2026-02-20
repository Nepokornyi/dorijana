import type { routing } from '@/i18n/routing'
import type csMessages from '@/messages/cs.json'

declare module 'next-intl' {
    interface AppConfig {
        Locale: (typeof routing.locales)[number]
        Messages: typeof csMessages
    }
}
