import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import './CoursesList.styled.scss'

import { usePreviewCourses } from '../../../../api/courses/queries/usePreviewCourses'
import { Spinner } from '../../../../ui-base/spinner/Spinner'
import { CourseSection } from '../courseSection/CourseSection'

export const CoursesList = () => {
  const { data, isLoading } = usePreviewCourses()
  const [startItemOffset, setStartItemOffset] = useState(0)
  const sortedCourses = data?.courses.sort((a, b) => b.rating - a.rating)
  const numberOfItems = 10
  const endItemOffset = startItemOffset + numberOfItems
  const paginatedCoursesList = sortedCourses?.slice(startItemOffset, endItemOffset)
  const pageCount = Math.ceil(sortedCourses?.length! / numberOfItems)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * numberOfItems) % sortedCourses!.length
    setStartItemOffset(newOffset)
  }

  return (
    <>
      {isLoading && (
        <div className="coursesSpinner">
          <Spinner />
        </div>
      )}

      {!isLoading && (
        <div className="listWrapper">
          {paginatedCoursesList?.length &&
            paginatedCoursesList.map(course => (
              <CourseSection
                key={course.id}
                id={course.id}
                title={course.title}
                previewImageLink={course.previewImageLink}
                lessonsCount={course.lessonsCount}
                skills={course.meta.skills}
                videoSrc={course.meta.courseVideoPreview?.link}
                rating={course.rating}
              />
            ))}
            
          <ReactPaginate
            containerClassName="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={numberOfItems}
            pageCount={pageCount}
            previousLabel="<"
          />
        </div>
      )}
    </>
  )
}
