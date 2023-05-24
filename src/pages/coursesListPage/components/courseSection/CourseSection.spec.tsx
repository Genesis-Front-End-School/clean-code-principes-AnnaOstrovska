import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import { CourseSection } from './CourseSection'

describe('Course Section component', () => {
  const props = {
    id: '1',
    title: 'Test Course',
    previewImageLink: 'https://example.com/image.jpg',
    lessonsCount: 10,
    skills: ['Skill 1', 'Skill 2'],
    videoSrc: 'https://example.com/video.mp4',
    rating: 4.5,
  };

  it('should render the course section with correct data', () => {
    render(
      <MemoryRouter>
        <CourseSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(`Lessons: ${props.lessonsCount}`)).toBeInTheDocument()
    expect(screen.getByText(`Rating: ${props.rating}`)).toBeInTheDocument()
    expect(screen.getByAltText('star')).toBeInTheDocument()
    expect(screen.getByAltText('Test Course')).toBeInTheDocument()
    expect(screen.getByText(props.skills[0])).toBeInTheDocument()
    expect(screen.getByText(props.skills[1])).toBeInTheDocument()
  })

  it('should attach HLS media to the video element', () => {
    const attachHlsMediaMock = jest.spyOn(require('../../../../utils/attachHlsMedia'), 'attachHlsMedia');
    const { container } = render(
      <MemoryRouter>
        <CourseSection {...props} />
      </MemoryRouter>
    );

    const videoElement = container.querySelector('video');

    expect(attachHlsMediaMock).toHaveBeenCalledWith(videoElement);
  });
});
