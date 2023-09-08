import { useEffect, useRef, useState } from 'react'

interface Props {
  buttonsClass: string
}

const useButtonCollection = ({ buttonsClass }: Props) => {
  const buttonCollectionRef = useRef<HTMLDivElement>(null)
  const [backgroundPos, setBackgroundPos] = useState({
    width: 0,
    height: 0,
    left: 0,
  })

  const handleUpdateButtonPos = (rect: DOMRect) => {
    const buttonCollectionRect =
      buttonCollectionRef.current?.getBoundingClientRect() as DOMRect

    const relativePos = {
      width: rect.width,
      height: rect.height,
      left: rect.left - buttonCollectionRect.left,
    }

    setBackgroundPos(relativePos)
  }

  // useEffect(() => {
  //   const initialButton = buttonCollectionRef?.current!
  //     .children[0] as HTMLElement
  //   const initalRect = initialButton.getBoundingClientRect()
  //   const initialButtonStyle = window.getComputedStyle(initialButton)
  //   const initialButtonWidth = initialButton.clientWidth
  //   handleUpdateButtonPos(initalRect)
  //   // })
  // }, [])

  return { buttonCollectionRef, backgroundPos, handleUpdateButtonPos }
}

export default useButtonCollection
