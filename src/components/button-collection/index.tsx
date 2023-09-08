import Button from 'components/button'
import {
  CSSProperties,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

interface Props {
  buttons: JSX.Element[]
  backgroundPos: Pick<DOMRect, 'width' | 'height' | 'left'>
}

const ButtonCollection = ({ buttons, activeIndex, handleClick }) => {
  const id = useId()
  const collectionRef = useRef<HTMLDivElement>(null)
  const [backgroundPos, setBackgroundPos] = useState({
    width: 0,
    height: 0,
    left: 0,
  })

  useEffect(() => {
    const activeEl = collectionRef?.current?.children[activeIndex]
    const activeRect = activeEl?.getBoundingClientRect()
    const collectionRect = collectionRef.current?.getBoundingClientRect()
    console.log('ACTIVE RECT', activeRect)
    const relativePos = {
      width: activeRect!.width,
      height: activeRect!.height,
      left: activeRect!.left - collectionRect!.left,
    }

    setBackgroundPos(relativePos)
  }, [activeIndex])

  return (
    <div
      ref={collectionRef}
      className='buttonCollection'
      style={
        {
          '--left': `${backgroundPos.left}px`,
          '--width': `${backgroundPos.width}px`,
          '--height': `${backgroundPos.height}px`,
        } as CSSProperties
      }>
      {buttons.map((buttonName, index) => {
        console.log('BTN name', buttonName)
        const isActive = activeIndex === index
        return (
          <Button
            key={id + index}
            isActive={isActive}
            handleClick={handleClick}>
            {buttonName}
          </Button>
        )
      })}
    </div>
  )
}
// const ButtonCollection = forwardRef<HTMLDivElement, Props>(
//   ({ buttons, backgroundPos }, ref) => {
//     return (
//       <div
//         className='buttonCollection'
//         ref={ref}
//         style={
//           {
//             '--left': `${backgroundPos.left}px`,
//             '--width': `${backgroundPos.width}px`,
//             '--height': `${backgroundPos.height}px`,
//           } as CSSProperties
//         }>
//         {buttons}
//       </div>
//     )
//   }
// )

export default ButtonCollection
