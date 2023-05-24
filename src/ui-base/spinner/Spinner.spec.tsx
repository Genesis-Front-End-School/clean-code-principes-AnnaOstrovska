import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Spinner } from './Spinner'

describe('Spinner', () => {
    it('should render the spinner component correctly', () => {
        render(<Spinner />)

        const spinner = screen.getByTestId('spinner')
        expect(spinner).toBeInTheDocument()
        expect(spinner).toHaveClass('spinner')
    })
})
