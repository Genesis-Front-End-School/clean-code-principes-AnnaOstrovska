import classNames from 'classnames'
import { ILessonProps } from '../../models'
import { Lock } from '../../../../ui-base/svg/Lock'
import '../../CoursePage.styled.scss'

export const CourseLesson = ({ active, isLocked, order, title, handleLessonClick }: ILessonProps) => (
    <div
        className={classNames('lessonSection', { active, isLocked })}
        key={order}
        onClick={() => handleLessonClick(order)}
        data-testid="course-lesson"
    >
        {isLocked && <Lock />}
        <h3>{`${order}. ${title}`}</h3>
    </div>
)
