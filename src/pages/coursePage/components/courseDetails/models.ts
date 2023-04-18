import { Course } from '../../../../types/courses/courses'

export interface ITabButtonProps {
  text: string
  id: string
  className: string
  handleClick: (e: React.MouseEvent) => void
}

export interface ICourseDetailsProps {
  course: Course
}
