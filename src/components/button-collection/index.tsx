import { CSSProperties, Ref, forwardRef, useEffect } from 'react'

interface Props {
  buttons: JSX.Element[]
  backgroundPos: Pick<DOMRect, 'width' | 'height' | 'left'>
}

const ButtonCollection = forwardRef<HTMLDivElement, Props>(
  ({ buttons, backgroundPos }, ref: Ref<HTMLDivElement>) => {
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
  }
)

export default ButtonCollection
