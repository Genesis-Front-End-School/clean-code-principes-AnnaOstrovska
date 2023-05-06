import { Course, Lesson } from '../../types/courses/courses'

export interface ITabButtonProps {
  text: string
  id: string
  className: string
  handleClick: (e: React.MouseEvent) => void
}

export interface ICourseDetailsProps {
  course: Course
}

export interface ILessonProps {
  active: boolean
  disabled: boolean
  order: Lesson['order']
  status: Lesson['status']
  title: Lesson['title']
  handleLessonClick: (order: number) => void
}
