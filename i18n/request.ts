import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale

    const baseMessages = (await import(`../messages/${locale}.json`)).default
    const termsData = (await import(`../messages/terms-${locale}.json`)).default as {
        sections: Array<{ title: string; clauses: Array<{ id: string; content: string; subItems?: string[] }> }>
    }

    return {
        locale,
        messages: {
            ...baseMessages,
            terms: {
                ...(baseMessages as { terms?: { pageTitle: string } }).terms,
                sections: termsData.sections,
            },
        },
    }
})
