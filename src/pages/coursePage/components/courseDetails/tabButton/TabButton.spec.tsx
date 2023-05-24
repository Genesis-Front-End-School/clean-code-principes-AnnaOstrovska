import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { TabButton } from "./TabButton"
import { ITabButtonProps } from "../../../models"

const handleClick = jest.fn()

describe('Tab Button component', () => {
    const props: ITabButtonProps = {
        text: "Tab Button",
        id: "tab-button",
        className: "active",
        handleClick: handleClick
    }

    test('should render Tab Button component', () => {
        render(<TabButton {...props} />)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button.textContent).toEqual(props.text)
        expect(button.getAttribute('id')).toEqual(props.id)
        expect(button).toHaveClass(props.className)
    })
})
