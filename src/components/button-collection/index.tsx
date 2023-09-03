import { CSSProperties, forwardRef } from 'react'

const ButtonCollection = forwardRef<any, any>(({ buttons, backgroundPos }, ref) => {
  return (
    <div
      className='buttonCollection'
      ref={ref}
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
})

export default ButtonCollection
