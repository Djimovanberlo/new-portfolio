import { useEffect, useRef, useState } from 'react'
import { useRect } from './useRect'

const useButtonCollection = () => {
  const { rect: buttonRect, ref: buttonRef } = useRect()
  const { rect: buttonCollectionRect, ref: buttonCollectionRef } = useRect()
  const [backgroundPos, setBackgroundPos] = useState({ width: buttonRect.width, height: buttonRect.height, left: 0 })

  useEffect(() => {
    if (buttonRect) setBackgroundPos({ width: buttonRect.width, height: buttonRect.height, left: 0 })
  }, [buttonRect])

  const handleUpdateButtonPos = evt => {
    if (!buttonCollectionRef?.current) return
    const clickedBtnRect = evt.target.getBoundingClientRect()

    const relativePos = {
      width: clickedBtnRect.width,
      height: clickedBtnRect.height,
      left: clickedBtnRect.left - buttonCollectionRect.left,
    }

    setBackgroundPos(relativePos)
  }

  return { buttonRef, buttonCollectionRef, backgroundPos, handleUpdateButtonPos, setBackgroundPos }
}

export default useButtonCollection
