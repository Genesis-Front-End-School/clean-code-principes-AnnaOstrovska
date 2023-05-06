import { useState, useEffect } from "react"

import { Course, Lesson } from '../types/courses/courses'

interface Props {
    isLoading: boolean
    course: Course | null
    videoRef: React.MutableRefObject<HTMLVideoElement | null>
}

export const useCurrentLesson = ({ isLoading, course, videoRef }: Props) => {
    const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(undefined)

    useEffect(() => {
        if (!isLoading && course) {
            const videoMeta = JSON.parse(window.localStorage.getItem(course.id)!)
            if (videoMeta) {
                setCurrentLesson(course?.lessons.find(lesson => lesson.order === videoMeta.currentLesson))
                if (videoRef.current) {
                    videoRef.current.currentTime = videoMeta.currentTime || 0
                }
            } else {
                setCurrentLesson(course?.lessons.find(lesson => lesson.order === 1))
            }
        }
    }, [isLoading, course])

    return { currentLesson, setCurrentLesson }
}
