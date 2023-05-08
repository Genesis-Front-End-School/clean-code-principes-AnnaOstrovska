import { useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import './CoursePage.styled.scss'

import { CourseDetails } from './components/courseDetails/CourseDetails'
import { usePreviewCourse } from '../../api/courses/queries/usePreviewCourse'
import { Loader } from '../../ui-base/loader/Loader'
import { useCurrentLesson } from '../../hooks/useCurrentLesson'
import { useUpdateVideoMeta } from '../../hooks/useUpdateVideoMeta'
import { CourseLesson } from './components/courseLesson/CourseLesson'
import { Lesson } from '../../types/courses/courses'

export const CoursePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { id } = useParams<{ id: string }>()
  const { data: course, isLoading } = usePreviewCourse({
    params: {
      courseId: id!,
    },
  })
  const { currentLesson, setCurrentLesson } = useCurrentLesson({ isLoading, course, videoRef })

  const sortedLessons = useMemo(() => course?.lessons.sort((a, b) => a.order - b.order), [course])

  useUpdateVideoMeta(course?.id, currentLesson?.order, isLoading, videoRef.current)

  const handleLessonClick = (order: Lesson['order']) => {
    setCurrentLesson(course?.lessons.find(lesson => lesson.order === order))
  }

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="coursePage">
          {course && (
            <>
              <h3 className="title">{course.title}</h3>

              <div className="lessonsWrapper">
                <div className="videoWrapper">
                  <video ref={videoRef} id={currentLesson?.link} src={currentLesson?.link} controls data-testid="course-video" />
                  <h4 className='subtitle'>{`${currentLesson?.order}. ${currentLesson?.title}`}</h4>
                </div>

                <div>
                  <h4 className='subtitle'>Lessons In This Course:</h4>
                  <div className="lessonsList">
                    {sortedLessons?.map(({ order, status, title, id }) => (
                      <CourseLesson
                        key={id}
                        active={order === currentLesson?.order}
                        order={order}
                        handleLessonClick={handleLessonClick}
                        title={title}
                        isLocked={status === 'locked'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <CourseDetails
                description={course.description}
                tags={course.tags}
                skills={course.meta.skills}
                launchDate={course.launchDate}
                rating={course.rating}
              />
            </>
          )}
        </div>
      )}
    </>
  )
}
