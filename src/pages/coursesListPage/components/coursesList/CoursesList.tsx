import { useState, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import { Spinner } from 'wisey-components-library'

import './CoursesList.styled.scss'

import { usePreviewCourses } from '../../../../api/courses/queries/usePreviewCourses'
import { CourseSection } from '../courseSection/CourseSection'

export const CoursesList = () => {
  const { data, isLoading } = usePreviewCourses()
  const [startItemOffset, setStartItemOffset] = useState(0)
  const sortedCourses = useMemo(() => data?.courses.sort((a, b) => b.rating - a.rating), [data])
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
        <div className="coursesSpinner" data-testid="spinner">
          <Spinner />
        </div>
      )}

      {!isLoading && (
        <div className="listWrapper" data-testid="courses-list">
          {paginatedCoursesList?.length &&
            paginatedCoursesList.map(({ id, title, previewImageLink, lessonsCount, meta, rating }) => (
              <CourseSection
                key={id}
                id={id}
                title={title}
                previewImageLink={previewImageLink}
                lessonsCount={lessonsCount}
                skills={meta.skills}
                videoSrc={meta.courseVideoPreview?.link}
                rating={rating}
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
