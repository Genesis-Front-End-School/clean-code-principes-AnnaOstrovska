import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'

import { CourseLesson } from "./CourseLesson"

describe('Course Lesson component', () => {
    const props = {
        active: true,
        isLocked: false,
        order: 1,
        title: 'Lesson 1',
        handleLessonClick: jest.fn(),
    }

    test('should render Course Lesson component with active and unlocked lesson', () => {
        render(<CourseLesson {...props} />)

        const courseLesson = screen.getByTestId('course-lesson')
        expect(courseLesson).toHaveClass('active')

        const lockIcon = screen.queryByAltText('lock')
        expect(lockIcon).toBeNull()

        const heading = screen.getByRole('heading', { level: 3 })
        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toEqual('1. Lesson 1')
    })

    test('should render Course Lesson component with locked and inactive lesson', () => {
        const lockedProps = {
            ...props,
            isLocked: true,
            active: false
        }

        render(<CourseLesson {...lockedProps} />)

        const courseLesson = screen.getByTestId('course-lesson')
        expect(courseLesson).not.toHaveClass('active')
        expect(courseLesson).toHaveClass('isLocked')

        const lockIcon = screen.getByTestId('lock')
        expect(lockIcon).toBeInTheDocument()
    })

    test('should call handleLessonClick when clicked', () => {
        render(<CourseLesson {...props} />)

        const courseLesson = screen.getByTestId('course-lesson')
        fireEvent.click(courseLesson)

        expect(props.handleLessonClick).toHaveBeenCalledWith(props.order)
    })
})
