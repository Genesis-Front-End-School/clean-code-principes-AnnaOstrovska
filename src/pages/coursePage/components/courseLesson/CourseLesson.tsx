import classNames from 'classnames'
import { ILessonProps } from '../../models'
import lock from '../../../../ui-base/svg/Lock.svg'
import '../../CoursePage.styled.scss'

export const CourseLesson = ({ active, disabled, order, status, title, handleLessonClick }: ILessonProps) => (
    <div
        className={classNames('lessonSection', { active, disabled })}
        key={order}
        onClick={() => handleLessonClick(order)}
    >
        {status === 'locked' && <img src={lock} alt="lock" />}
        <h3>{`${order}. ${title}`}</h3>
    </div>
)
