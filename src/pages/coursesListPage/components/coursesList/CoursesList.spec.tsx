import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import { CoursesList } from './CoursesList'
import { usePreviewCourses } from '../../../../api/courses/queries/usePreviewCourses'

jest.mock('../../../../api/courses/queries/usePreviewCourses', () => ({
    usePreviewCourses: jest.fn()
}))
const mockUsePreviewCourses = usePreviewCourses as jest.Mock

describe('Courses List component', () => {
    const courses = {
        data: {
            courses: [
                {
                    id: 1,
                    title: 'Course 1',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                },
                {
                    id: 2,
                    title: 'Course 2',
                    previewImageLink: 'image-link',
                    lessonsCount: 8,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 3.8
                },
                {
                    id: 3,
                    title: 'Course 3',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                },
                {
                    id: 4,
                    title: 'Course 4',
                    previewImageLink: 'image-link',
                    lessonsCount: 8,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 3.8
                },
                {
                    id: 5,
                    title: 'Course 5',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                },
                {
                    id: 6,
                    title: 'Course 6',
                    previewImageLink: 'image-link',
                    lessonsCount: 8,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 3.8
                },
                {
                    id: 7,
                    title: 'Course 7',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                },
                {
                    id: 8,
                    title: 'Course 8',
                    previewImageLink: 'image-link',
                    lessonsCount: 8,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 3.8
                },
                {
                    id: 9,
                    title: 'Course 9',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                },
                {
                    id: 10,
                    title: 'Course 10',
                    previewImageLink: 'image-link',
                    lessonsCount: 8,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 3.8
                },
                {
                    id: 11,
                    title: 'Course 11',
                    previewImageLink: 'image-link',
                    lessonsCount: 5,
                    meta: {
                        skills: ['skill', 'skill'],
                        courseVideoPreview: {
                            link: 'video-link'
                        }
                    },
                    rating: 4.5
                }
            ]
        },
        isLoading: false
    }

    beforeEach(() => {
        mockUsePreviewCourses.mockReturnValue(courses)
    })

    it('should render the course list correctly', () => {
        render(
            <MemoryRouter>
                <CoursesList />
            </MemoryRouter>
        )

        const course1 = screen.getByText(courses.data.courses[0].title)
        const course2 = screen.getByText(courses.data.courses[1].title)
        expect(course1).toBeInTheDocument()
        expect(course2).toBeInTheDocument()

        const pagination = screen.getByRole('navigation')
        expect(pagination).toBeInTheDocument()
    })

    it('should render loading spinner when data is loading', () => {
        mockUsePreviewCourses.mockReturnValueOnce({
            data: null,
            isLoading: true
        })

        render(
            <MemoryRouter>
                <CoursesList />
            </MemoryRouter>
        )

        const spinner = screen.getByTestId('spinner')
        expect(spinner).toBeInTheDocument()
    })

    it('should handle that page clicks correctly', async () => {
        render(
            <MemoryRouter>
                <CoursesList />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByText(/>/))

        const course1 = courses.data.courses[0].title
        const course2 = courses.data.courses[1].title

        expect(screen.queryByText(course1)).not.toBeInTheDocument()
        expect(screen.queryByText(course2)).not.toBeInTheDocument()

        fireEvent.click(screen.getByText(/</))

        expect(screen.getByText(course1)).toBeInTheDocument()
        expect(screen.getByText(course2)).toBeInTheDocument()
    })
})
