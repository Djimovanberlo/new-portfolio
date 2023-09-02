import { useId } from 'react'

import projects from 'lib/copy/projects'
// TODO ts

const Grid = ({ handleClick }) => {
  const id = useId()

  return (
    <div className='grid'>
      {Object.entries(projects).map(([key, { title, img }], index) => {
        return (
          <div
            className='grid__cell'
            key={id + index}
            onClick={handleClick}
            id={key}
            style={{
              backgroundImage: `url(${img})`,
            }}>
            {title}
          </div>
        )
      })}
    </div>
  )
}

export default Grid
