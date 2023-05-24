import classNames from 'classnames'
import { ILessonProps } from '../../models'
import lock from '../../../../ui-base/svg/Lock.svg'
import '../../CoursePage.styled.scss'

export const CourseLesson = ({ active, isLocked, order, title, handleLessonClick }: ILessonProps) => (
    <div
        className={classNames('lessonSection', { active, isLocked })}
        key={order}
        onClick={() => handleLessonClick(order)}
        data-testid="course-lesson"
    >
        {isLocked && <img src={lock} alt="lock" />}
        <h3>{`${order}. ${title}`}</h3>
    </div>
)
