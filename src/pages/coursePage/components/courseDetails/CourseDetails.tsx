import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SkillsSection } from 'wisey-components-library'

import './CourseDetails.styled.scss'
import { TabButton } from './tabButton/TabButton'
import { ICourseDetailsProps } from '../../models'

export const CourseDetails = ({ description, launchDate, rating, tags, skills }: ICourseDetailsProps) => {
  const navigate = useNavigate()
  const { hash } = useLocation()
  const [currentTab, setCurrentTab] = useState(hash || '#description')
  const isDescriptionTab = currentTab === '#description'
  const isDetailsTab = currentTab === '#details'
  const isTagsTab = currentTab === '#tags'
  const date = new Date(launchDate)

  const handleTabChange = (e: React.MouseEvent) => {
    const id = (e.target as HTMLButtonElement).id
    navigate({ hash: `#${id}` })
    setCurrentTab(`#${id}`)
  }

  return (
    <div className="aboutWrapper">
      <div className="buttonsWrapper">
        <TabButton
          id="description"
          className={isDescriptionTab ? 'active' : ''}
          handleClick={handleTabChange}
          text="Description"
        />
        <TabButton
          id="details"
          className={isDetailsTab ? 'active' : ''}
          handleClick={handleTabChange}
          text="Details"
        />
        <TabButton
          id="tags"
          className={isTagsTab ? 'active' : ''}
          handleClick={handleTabChange}
          text="Tags"
        />
      </div>

      {isDescriptionTab && (
        <div className="tab">
          <p>{description}</p>
          {skills && (
            <div className="skills">
              <SkillsSection skills={skills} />
            </div>
          )}
        </div>
      )}

      {isDetailsTab && (
        <div className="tab">
          <div className="block">
            <h4>Launch Date: </h4>
            <p>{date.toDateString()}</p>
          </div>
          <div className="block">
            <h4>Rating: </h4>
            <p>{rating}</p>
          </div>
        </div>
      )}

      {isTagsTab && (
        <div className="tab">
          <p>{tags.join(', ').toUpperCase()}</p>
        </div>
      )}
    </div>
  )
}
