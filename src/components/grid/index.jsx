import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'

//TODO clean!
const Cell = ({ title, img, imgRef, projectsRef }) => {
  const cellRef = useRef(null)

  const handleClicker = () => {
    const modalEl = imgRef.current.parentElement

    modalEl.style.setProperty('display', 'block')

    imgRef.current.setAttribute('data-image', title)
    imgRef.current.setAttribute('src', cellRef.current.getAttribute('src'))

    projectsRef.current.style.setProperty('opacity', 0)

    const prevRect = cellRef.current.getBoundingClientRect()
    const finalRect = imgRef.current.getBoundingClientRect()

    imgRef.current.animate(
      [
        {
          transform: `
          translateX(${prevRect.left - finalRect.left}px)
          translateY(${prevRect.top - finalRect.top}px)
          scale(${prevRect.width / finalRect.width})
        `,
        },
        {
          transform: `
          translateX(0)
          translateY(0)
          scale(1)
         `,
        },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
      }
    )
  }

  return (
    <img
      ref={cellRef}
      className='grid__cell'
      data-key={title}
      onClick={handleClicker}
      src={img}
    />
  )
}

const Grid = ({ imgRef, projectsRef }) => {
  const id = useId()

  return (
    <div className='grid'>
      {Object.values(projects).map(({ title, img }, index) => (
        <Cell
          className='grid__cell'
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

export default Grid
