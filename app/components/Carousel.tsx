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
import './carousel.css'

import dock from '@/assets/carousel/dock.jpg'
import harfa from '@/assets/carousel/harfa.jpg'
import suomi from '@/assets/carousel/suomi.jpg'
import visionary from '@/assets/carousel/visionary.jpg'
import jarov from '@/assets/carousel/jarov.jpg'

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
        <FlexContainer width="w-full lg:w-5/6" className="lg:pl-[15%] my-32">
            <Box className="w-full lg:ml-20">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides
                    loop
                    className="carousel-swiper"
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
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-[50vh] relative">
                                <Image
                                    src={item}
                                    alt={`Carousel image ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="w-full h-[0.5px] bg-[#fafafa] mt-4">
                    <div
                        className={`h-full bg-black ${
                            isResetting
                                ? 'transition-all duration-3000 ease-out'
                                : 'transition-none'
                        }`}
                        style={{ width: isResetting ? '0%' : `${progress}%` }}
                    />
                </div>
            </Box>
        </FlexContainer>
    )
}
