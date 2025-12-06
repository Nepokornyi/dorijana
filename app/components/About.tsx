import React from 'react'
import { Box } from '@/components/ui/box'
import { H3, P } from '@/components/ui/typography'
import VideoPlayer from '@/components/VideoPlayer'

const gridData = [
    { text: 'Č. 01' },
    { text: 'Kdo jsme?' },
    { text: 'Stavební Vize', className: 'hidden lg:block' },
]

export const About = () => {
    return (
        <>
            <Box className="w-full lg:w-5/6 lg:pl-[15%] grid grid-cols-2 lg:grid-cols-3 gap-10">
                {gridData.map((col) => (
                    <Box
                        key={col.text}
                        className={`px-10 lg:px-20 py-10 ${col.className}`}
                    >
                        {col.text}
                    </Box>
                ))}
            </Box>
            <Box className="w-5/6 lg:pl-[15%] grid grid-cols-1 lg:grid-cols-3 gap-10">
                <H3 className="hidden lg:block px-20 py-10">{'Kdo jsme?'}</H3>
                <H3 className="px-10 lg:px-20 py-10 lg:col-span-2">
                    {
                        'Jsme stavební společnost z Prahy zaměřená na kompletní realizaci stavebních prací. Naši odborníci spojují dlouholeté zkušenosti s moderním přístupem, díky čemuž nabízíme ucelená řešení pro každý projekt — od hrubé stavby až po finální dokončení.'
                    }
                </H3>
                <P className="pl-10 lg:pl-20 pb-10 lg:col-start-2">
                    {
                        'Ke každé zakázce přistupujeme zodpovědně, otevřeně a s respektem k potřebám klienta. Garantujeme férové jednání, vysokou kvalitu provedení a dodržení sjednaných termínů i cen. Žádné skryté vícepráce, žádná překvapení — na vše poskytujeme záruku 60 měsíců.'
                    }
                </P>
                <P className="pl-10 lg:pl-20 pb-10 lg:col-start-3">
                    {
                        'Dbáme na kvalitu vlastní práce, stejně jako na výběr dodavatelů a materiálů Máme všechna potřebná oprávnění a certifikáty pro stavební činnost a jsme členy Hospodářské komory hlavního města Prahy.'
                    }
                </P>
            </Box>
            <Box className="relative w-full h-[50vh] bg-black/35">
                <VideoPlayer
                    src="/video3/master.m3u8"
                    autoPlay
                    loop
                    className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
                />
            </Box>
        </>
    )
}
