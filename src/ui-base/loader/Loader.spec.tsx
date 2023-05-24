import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Loader } from './Loader'

describe('Loader component', () => {
    it('should render the loader component correctly', () => {
        render(<Loader />)

        const loader = screen.getByTestId('loader')
        expect(loader).toBeInTheDocument()
        expect(loader).toHaveClass('loader')
    })
})
