import { useId, useRef, useState } from 'react'

import projects from 'lib/copy/projects'
// TODO ts

const Cell = ({ title, img, handleClick, id, imgRef, projectsRef }) => {
  const cellRef = useRef(null)

  const handleClicker = () => {
    const modalEl = imgRef.current.parentElement

    modalEl.style.setProperty('display', 'block')
    modalEl.setAttribute('data-image', title)

    console.log("cellRef.current.getAttribute('src')", cellRef.current)
    modalEl
      .querySelector('img')
      .setAttribute('src', cellRef.current.getAttribute('src'))
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
    // setIsCollapsed(prevState => !prevState)

    // const { dx, dy, dw, dh } = flipAnimate(finalRect, prevRect)

    // cellRef.current.style.setProperty('--dx', dx)
    // cellRef.current.style.setProperty('--dy', dy)
    // cellRef.current.style.setProperty('--dw', dw)
    // cellRef.current.style.setProperty('--dh', dh)

    // requestAnimationFrame(() => {
    //   // const finalRect = cellRef.current.getBoundingClientRect()
    //   // const finalRect = imgRect
    //   const { dx, dy, dw, dh } = flipAnimate(prevRect, finalRect)

    //   cellRef.current.style.setProperty('--dx', dx)
    //   cellRef.current.style.setProperty('--dy', dy)
    //   cellRef.current.style.setProperty('--dw', dw)
    //   cellRef.current.style.setProperty('--dh', dh)

    //   cellRef.current.dataset.flip = 'invert'

    //   requestAnimationFrame(() => (cellRef.current.dataset.flip = 'play'))
    // })
  }

  return (
    <img
      id={id}
      ref={cellRef}
      className='grid__cell'
      data-key={title}
      onClick={handleClicker}
      src={img}
    />
  )
}

const Grid = ({ modalIsOpen, handleClick, imgRef, projectsRef }) => {
  const id = useId()

  return (
    <div className='grid' data-modal-open={modalIsOpen}>
      {Object.entries(projects).map(([key, { title, img }], index) => (
        <Cell
          className='grid__cell'
          key={id + index}
          id={key}
          img={img}
          title={title}
          imgRef={imgRef}
          projectsRef={projectsRef}
          handleClick={handleClick}>
          {title}
        </Cell>
      ))}
    </div>
  )
}

export default Grid
