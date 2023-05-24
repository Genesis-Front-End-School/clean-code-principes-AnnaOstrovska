import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { usePreviewCourse } from '../../api/courses/queries/usePreviewCourse'
import { CoursePage } from './CoursePage'

jest.mock('../../api/courses/queries/usePreviewCourse')
const mockUsePreviewCourse = usePreviewCourse as jest.Mock

describe('Course Page component', () => {
    const courses = {
        data: {
            id: '1',
            title: 'Test title',
            description: 'Test description',
            lessons: [
                { id: 'lesson1', title: 'Lesson 1', order: 1, status: 'unlocked', link: 'lesson1.mp4' },
                { id: 'lesson2', title: 'Lesson 2', order: 2, status: 'unlocked', link: 'lesson2.mp4' },
            ],
            tags: ['tag1', 'tag2'],
            meta: {
                skills: ['skill1', 'skill2']
            },
            launchDate: '2023-05-01T00:00:00.000Z',
            rating: 5,
        },
        isLoading: false,
    }

    beforeEach(() => {
        mockUsePreviewCourse.mockReturnValue(courses)
    })

    test('should render course details when not loading', () => {
        render(
            <MemoryRouter>
                <CoursePage />
            </MemoryRouter>
        )

        expect(screen.getByText(courses.data.title)).toBeInTheDocument()
        expect(screen.getByText(courses.data.description)).toBeInTheDocument()
    })

    test('should render loader when loading', () => {
        mockUsePreviewCourse.mockReturnValue({
            isLoading: true,
        })

        render(
            <MemoryRouter>
                <CoursePage />
            </MemoryRouter>
        )

        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    test('should render video and lesson list when course is loaded', () => {
        render(
            <MemoryRouter>
                <CoursePage />
            </MemoryRouter>
        )

        expect(screen.getByTestId('course-video')).toBeInTheDocument()
        expect(screen.getAllByRole('listitem')).toHaveLength(2)
    })
})
