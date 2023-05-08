import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SkillsSection } from './SkillsSection'

describe('Skills Section component', () => {
    it('should render the skills section correctly', () => {
        const skills = ['Skill 1', 'Skill 2', 'Skill 3']

        render(<SkillsSection skills={skills} />)

        const skillsTitle = screen.getByText('Skills:')
        expect(skillsTitle).toBeInTheDocument()

        const skillsItems = screen.getAllByRole('listitem')
        expect(skillsItems).toHaveLength(3)
        skills.forEach((skill, index) => {
            expect(skillsItems[index]).toHaveTextContent(skill)
        })

        expect(skillsTitle).toHaveClass('skillsTitle')
        skillsItems.forEach((item) => {
            expect(item).toHaveClass('skillsItem')
        })
    })
})
