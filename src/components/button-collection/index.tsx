import { CSSProperties } from 'react'

const ButtonCollection = ({ buttons, buttonCollectionRef, backgroundPos }) => {
  return (
    <div
      className='buttonCollection'
      ref={buttonCollectionRef}
      style={
        {
          '--left': `${backgroundPos.left}px`,
          '--width': `${backgroundPos.width}px`,
          '--height': `${backgroundPos.height}px`,
        } as CSSProperties
      }>
      {buttons}
    </div>
  )
}

export default ButtonCollection
