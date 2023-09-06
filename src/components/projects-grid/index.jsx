import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import getFlipProperties from 'lib/flip'

//TODO TSX
//TODO clean!
const Cell = ({ title, img, imgRef, projectsRef }) => {
  const cellRef = useRef(null)

  const handleClick = () => {
    const modalEl = imgRef.current.parentElement

    modalEl.style.setProperty('display', 'grid')
    projectsRef.current.style.setProperty('opacity', 0)

    imgRef.current.setAttribute('data-image', title)
    imgRef.current.setAttribute('src', cellRef.current.getAttribute('src'))

    const prevRect = cellRef.current.getBoundingClientRect()
    const finalRect = imgRef.current.getBoundingClientRect()

    const { transforms, options } = getFlipProperties({ prevRect, finalRect })

    imgRef.current.animate(transforms, options)
  }

  return (
    <img
      ref={cellRef}
      className='projectsGrid__cell'
      alt={title}
      data-key={title}
      onClick={handleClick}
      src={img}
    />
  )
}

const ProjectsGrid = ({ imgRef, projectsRef }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.values(projects).map(({ title, img }, index) => (
        <Cell
          key={id + index}
          img={img}
          title={title}
          imgRef={imgRef}
          projectsRef={projectsRef}>
          {title}
        </Cell>
      ))}
    </div>
  )
}

export default ProjectsGrid
