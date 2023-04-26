import Hls from 'hls.js'

export const attachHlsMedia = (videoRefCurrent: HTMLVideoElement | null) => {
    if (videoRefCurrent) {
        const videoSrc = videoRefCurrent.id
        console.log(videoSrc, Hls.isSupported())
        if (Hls.isSupported()) {
            const hls = new Hls()
            hls.loadSource(videoSrc)
            hls.attachMedia(videoRefCurrent)
        } else if (videoRefCurrent.canPlayType('application/vnd.apple.mpegurl')) {
            videoRefCurrent.src = videoSrc
        }
    }
}