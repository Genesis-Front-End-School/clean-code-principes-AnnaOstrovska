import './CoursesListPage.styled.scss'

import { CoursesList } from './components/coursesList/CoursesList'
import homeImage from '../../ui-base/images/HomeImage.png'
import { ArrowDown } from '../../ui-base/svg/ArrowDown'

export default function CoursesListPage() {
  return (
    <div className="pageWrapper">
      <div className="topWrapper">
        <div className="title">
          <h3>Start to success</h3>
          <h1 className='bigTitle'>Let&apos;s find the right course for you</h1>
          <h4 className='smallTitle'>
            Invest in your future with our education platform. Your path to success starts here.
          </h4>
        </div>

        <div className="imageWrapper">
          <img src={homeImage} alt="HomeImage" />
        </div>
      </div>

      <div className="coursesWrapper">
        <h3>
          Preview our most popular courses <ArrowDown />
        </h3>
        <CoursesList />
      </div>
    </div>
  )
}
