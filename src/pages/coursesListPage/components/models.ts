import { CourseDTO } from '../../../types/courses/courses'

export type ICourseSectionProps = Pick<
  CourseDTO,
  'id' | 'title' | 'previewImageLink' | 'lessonsCount' | 'rating'
> & {
  skills?: string[]
  videoSrc?: string
}
