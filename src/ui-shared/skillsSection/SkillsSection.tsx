import './SkillsSection.styled.scss'
import { ISkillsSectionProps } from './models'

export const SkillsSection = ({ skills }: ISkillsSectionProps) => (
  <>
    <h5>Skills:</h5>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </>
)
