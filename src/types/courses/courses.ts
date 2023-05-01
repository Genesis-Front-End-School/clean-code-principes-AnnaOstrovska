export interface AllCourses {
  courses: Omit<CourseDTO, 'lessons'>[]
}

export type Course = Omit<CourseDTO, 'lessonsCount'>

export interface CourseDTO extends Omit<VideoPreview, 'link'> {
  containsLockedLessons: boolean
  description: string
  id: string
  launchDate: string
  lessonsCount: number
  lessons: Lesson[]
  meta: Meta
  rating: number
  status: string
  tags: string[]
  title: string
}

export interface Meta extends VideoPreview {
  courseVideoPreview: VideoPreview
  skills: string[]
  slug: string
}

export interface VideoPreview {
  duration: number
  link: string
  previewImageLink: string
}

export interface Lesson extends VideoPreview {
  id: string
  meta: Meta | null
  order: number
  status: string
  title: string
  type: string
}
