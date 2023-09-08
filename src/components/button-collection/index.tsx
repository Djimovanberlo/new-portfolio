import Button from 'components/button'
import { CSSProperties, useEffect, useId, useRef, useState } from 'react'

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

    if (activeEl) {
      const activeRect = activeEl.getBoundingClientRect()
      const collectionRect = collectionRef.current.getBoundingClientRect()

      const relativePos = {
        width: activeRect.width,
        height: activeRect.height,
        left: activeRect.left - collectionRect.left,
      }

      setBackgroundPos(relativePos)
    }
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
      {buttons.map(({ buttonName, text }, index) => {
        const isActive = activeIndex === index
        return (
          <Button
            key={id + index}
            name={buttonName}
            isActive={isActive}
            handleClick={handleClick}>
            {text}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonCollection
