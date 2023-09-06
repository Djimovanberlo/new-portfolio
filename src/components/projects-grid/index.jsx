import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import getFlipProperties from 'lib/flip'

//TODO TSX
//TODO clean!
const Cell = ({
  id,
  title,
  img,
  imgRef,
  projectsRef,
  handleChangeActiveProject,
}) => {
  const cellRef = useRef(null)

  const handleClickWolla = () => {
    handleChangeActiveProject(id)
    const modalEl = imgRef.current.parentElement

    modalEl.style.setProperty('display', 'grid')
    projectsRef.current.style.setProperty('opacity', 0)
    projectsRef.current.style.setProperty(
      'transition',
      'opacity 0.5s ease-in-out'
    )

    imgRef.current.setAttribute('data-image', title)
    // imgRef.current.setAttribute('src', cellRef.current.getAttribute('src'))

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
      onClick={handleClickWolla}
      src={img}
    />
  )
}

const ProjectsGrid = ({ imgRef, projectsRef, handleChangeActiveProject }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.entries(projects).map(([key, { title, img }]) => (
        <Cell
          key={id + key}
          id={key}
          img={img}
          title={title}
          imgRef={imgRef}
          projectsRef={projectsRef}
          handleChangeActiveProject={handleChangeActiveProject}>
          {title}
        </Cell>
      ))}
    </div>
  )
}

export default ProjectsGrid
