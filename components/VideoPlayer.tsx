'use client'

import { useEffect, useRef } from 'react'
import Hls, { HlsConfig } from 'hls.js'

interface VideoPlayerProps {
    src: string
    poster?: string
    autoPlay?: boolean
    loop?: boolean
    className?: string
}

export default function VideoPlayer({
    src,
    poster,
    autoPlay = false,
    loop = false,
    className,
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // If Safari or iOS, native HLS is supported
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src
        } else if (Hls.isSupported()) {
            const hlsConfig: HlsConfig = {
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90,
            }

            const hls = new Hls(hlsConfig)
            hls.loadSource(src)
            hls.attachMedia(video)

            return () => {
                hls.destroy()
            }
        } else {
            console.error('HLS not supported in this browser.')
        }
    }, [src])

    return (
        <video
            ref={videoRef}
            controls
            preload="none"
            poster={poster}
            autoPlay={autoPlay}
            loop={loop}
            playsInline
            muted
            className={className}
        />
    )
}
