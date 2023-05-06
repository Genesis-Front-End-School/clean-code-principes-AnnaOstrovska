import { useCallback, useEffect } from 'react'
import { Course, Lesson } from '../types/courses/courses'
import { attachHlsMedia } from '../utils/attachHlsMedia'

export const useUpdateVideoMeta = (id?: Course['id'], currentLesson?: Lesson['order'], isLoading?: boolean, videoRefCurrent?: HTMLVideoElement | null) => {
    const updateVideoMeta = useCallback(
        (video: HTMLMediaElement) => {
            if (id) {
                const videoMeta = {
                    id,
                    currentLesson,
                    currentTime: video.currentTime,
                }
                window.localStorage.setItem(id, JSON.stringify(videoMeta))
            }
        },
        [id, currentLesson],
    )

    useEffect(() => {
        if (!isLoading && currentLesson) {
            if (videoRefCurrent) {
                attachHlsMedia(videoRefCurrent)

                videoRefCurrent.addEventListener('timeupdate', () =>
                    updateVideoMeta(videoRefCurrent as HTMLMediaElement),
                )

                return () =>
                    videoRefCurrent?.removeEventListener('timeupdate', () =>
                        updateVideoMeta(videoRefCurrent as HTMLMediaElement),
                    )
            }
        }
    }, [isLoading, currentLesson, updateVideoMeta, videoRefCurrent])
}
