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
    const hlsRef = useRef<Hls | null>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src
        } else if (Hls.isSupported()) {
            const hlsConfig: Partial<HlsConfig> = {
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90,
            }

            const hls = new Hls(hlsConfig)
            hls.loadSource(src)
            hls.attachMedia(video)
            hlsRef.current = hls

            return () => {
                hls.destroy()
            }
        }
    }, [src])

    // Handle custom looping without resetting the stream
    useEffect(() => {
        const video = videoRef.current
        if (!video || !loop) return

        const handleEnded = () => {
            const hls = hlsRef.current

            if (hls) {
                const level =
                    hls.currentLevel === -1
                        ? hls.levels.length - 1
                        : hls.currentLevel

                hls.currentLevel = level
                hls.nextLevel = level
                hls.autoLevelCapping = level
            }

            video.currentTime = 0
            video.play().catch(() => {})
        }

        video.addEventListener('ended', handleEnded)
        return () => video.removeEventListener('ended', handleEnded)
    }, [loop])

    return (
        <video
            ref={videoRef}
            preload="none"
            poster={poster}
            autoPlay={autoPlay}
            playsInline
            muted
            className={className}
        />
    )
}
