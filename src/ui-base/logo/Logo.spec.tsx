import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Logo } from './Logo'

describe('Logo component', () => {
    it('should render the logo component correctly', () => {
        render(<Logo />)

        const logo = screen.getByTestId('logo')
        expect(logo).toBeInTheDocument()

        const wiseyText = screen.getByText('WISEY')
        expect(wiseyText).toBeInTheDocument()

        const studyText = screen.getByText('STUDY')
        expect(studyText).toBeInTheDocument()

        expect(wiseyText).toHaveClass('wisey')
        expect(studyText).toHaveClass('study')
    })
})
