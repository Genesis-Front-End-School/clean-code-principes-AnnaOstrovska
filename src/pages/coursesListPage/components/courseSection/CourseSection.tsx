import Hls from 'hls.js'
import { useRef, useEffect } from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import { Link } from 'react-router-dom'

import './CourseSection.styled.scss'

import { RoutesManager } from '../../../../routesManager'
import Star from '../../../../ui-base/svg/Star.svg'
import { SkillsSection } from '../../../../ui-shared/skillsSection/SkillsSection'
import { CourseDTO } from '../../../../types/courses/courses'

type Props = Pick<CourseDTO, 'id' | 'title' | 'previewImageLink' | 'lessonsCount' | 'rating'> & {
  skills?: string[]
  videoSrc?: string
}

export const CourseSection = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  skills,
  videoSrc,
  rating,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      const videoSrc = videoRef.current.id
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(videoRef.current)
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoSrc
      }
    }
  }, [videoRef])

  return (
    <Link to={RoutesManager.view.root.getURL({ id })} className="course">
      <div>
        <div className="video">
          <HoverVideoPlayer
            videoRef={videoRef}
            videoId={videoSrc}
            videoSrc={videoSrc}
            pausedOverlay={
              <img
                src={`${previewImageLink}/cover.webp`}
                alt={title}
                style={{
                  width: '360px',
                  height: '260px',
                  objectFit: 'cover',
                }}
              />
            }
          />
        </div>
        <div className="footer">
          <div className="rating">
            <p>Rating: {rating}</p>
            <img src={Star} alt="star" />
          </div>
          <p>Lessons: {lessonsCount}</p>
        </div>
      </div>
      <div className="descriptionWrapper">
        <div>
          <h4>{title}</h4>
          {skills && <SkillsSection skills={skills} />}
        </div>
      </div>
    </Link>
  )
}
