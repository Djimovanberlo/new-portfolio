import { useId, useRef, useState } from 'react'

import projects from 'lib/copy/projects'
// TODO ts

const Cell = ({ title, img, handleClick, id, imgRect }) => {
  const cellRef = useRef(null)
  const [isCollapsed, setIsCollapsed] = useState(true)

  const flipAnimate = (prevRect, finalRect) => {
    const dx = prevRect.left - finalRect.left
    const dy = prevRect.top - finalRect.top
    const dw = prevRect.width / finalRect.width
    const dh = prevRect.height / finalRect.height

    return { dx, dy, dw, dh }
  }

  const handleClicker = () => {
    const prevRect = cellRef.current.getBoundingClientRect()
    const finalRect = imgRect
    setIsCollapsed(prevState => !prevState)

    const { dx, dy, dw, dh } = flipAnimate(finalRect, prevRect)

    cellRef.current.style.setProperty('--dx', dx)
    cellRef.current.style.setProperty('--dy', dy)
    cellRef.current.style.setProperty('--dw', dw)
    cellRef.current.style.setProperty('--dh', dh)

    // requestAnimationFrame(() => {
    //   // const finalRect = cellRef.current.getBoundingClientRect()
    //   const finalRect = imgRect
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
    <div
      ref={cellRef}
      id={id}
      className='grid__cell'
      data-collapse={isCollapsed}
      onClick={handleClicker}
      style={{
        backgroundImage: `url(${img})`,
      }}>
      {title}
    </div>
  )
}

const Grid = ({ handleClick, imgRect }) => {
  const id = useId()

  return (
    <div className='grid'>
      {Object.entries(projects).map(([key, { title, img }], index) => (
        <Cell className='grid__cell' key={id + index} onClick={handleClick} id={key} img={img} imgRect={imgRect}>
          {title}
        </Cell>
      ))}
    </div>
  )
}

export default Grid
