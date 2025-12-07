'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { FlexContainer } from '@/components/ui/flexContainer'
import { Box } from '@/components/ui/box'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
// TODO: might look better without styles
// import './carousel.css'

import dock from '@/assets/carousel/dock.jpg'
import harfa from '@/assets/carousel/harfa.jpg'
import suomi from '@/assets/carousel/suomi.jpg'
import visionary from '@/assets/carousel/visionary.jpg'
import jarov from '@/assets/carousel/jarov.jpg'
import { Button } from '@/components/ui/button'

const carouselItems = [dock, harfa, suomi, visionary, jarov]

export const Carousel = () => {
    const [progress, setProgress] = useState(0)
    const [isResetting, setIsResetting] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleSlideChange = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.stop()
        }

        setProgress(0)
        setIsResetting(true)

        timeoutRef.current = setTimeout(() => {
            setIsResetting(false)
            if (swiperRef.current?.autoplay) {
                swiperRef.current.autoplay.start()
            }
        }, 3000)
    }
    return (
        <FlexContainer
            width="w-full lg:w-5/6"
            className="lg:pl-60 my-16 lg:my-32"
        >
            <Box className="w-full px-10 lg:px-0">
                <Swiper
                    className="carousel-swiper"
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    onAutoplayTimeLeft={(s, time, progress) => {
                        if (!isResetting) {
                            setProgress((1 - progress) * 100)
                        }
                    }}
                    onSlideChange={handleSlideChange}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="group w-full h-[50vh] relative">
                                <Image
                                    src={item}
                                    alt={`Carousel image ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/35 group-hover:bg-black/10 duration-500">
                                    <Button className="opacity-0 group-hover:opacity-100 duration-500 cursor-pointer">
                                        Zjistít víc
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* border color: #ffffff1a */}
                <div className="w-full h-[0.5px] bg-[#fafafa] mt-4">
                    <div
                        className={`h-full bg-neutral-950 ${
                            isResetting
                                ? 'transition-all duration-3000 ease-out'
                                : 'transition-none'
                        }`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </Box>
        </FlexContainer>
    )
}
