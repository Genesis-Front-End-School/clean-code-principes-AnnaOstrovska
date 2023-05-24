import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import CoursesListPage from './CoursesListPage'

const queryClient = new QueryClient()

describe('CoursesListPage', () => {
    it('should render the page correctly', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <CoursesListPage />
                </MemoryRouter>
            </QueryClientProvider>
        )

        const pageTitle = screen.getByText("Let's find the right course for you")
        const pageSubtitle = screen.getByText(
            'Invest in your future with our education platform. Your path to success starts here.'
        )
        const previewCoursesTitle = screen.getByText('Preview our most popular courses')

        expect(pageTitle).toBeInTheDocument()
        expect(pageSubtitle).toBeInTheDocument()
        expect(previewCoursesTitle).toBeInTheDocument()
    })

    it('should render the home image and arrow icon correctly', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <CoursesListPage />
                </MemoryRouter>
            </QueryClientProvider>

        )

        const homeImage = screen.getByAltText('HomeImage')
        expect(homeImage).toBeInTheDocument()
        expect(homeImage).toHaveAttribute('src', 'HomeImage.png')

        const arrowDownIcon = screen.getByTestId('arrowDown')
        expect(arrowDownIcon).toBeInTheDocument()
        expect(arrowDownIcon).toHaveClass('arrowDown')
    })
})
