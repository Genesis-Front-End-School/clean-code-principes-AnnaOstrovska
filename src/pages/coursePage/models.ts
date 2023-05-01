import { Course, Lesson } from '../../types/courses/courses'

export interface ITabButtonProps {
  text: string
  id: string
  className: string
  handleClick: (e: React.MouseEvent) => void
}

export type ICourseDetailsProps = Pick<Course, 'description' | 'launchDate' | 'rating' | 'tags' | 'meta'>

export type ILessonProps = Pick<Lesson, 'order' | 'title'> & {
  active: boolean
  isLocked: boolean
  handleLessonClick: (order: Lesson['order']) => void
}