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

  useEffect(() => {
    const activeButton = document.querySelector(
      `button.${buttonsClass}[data-active="true"]`
    ) as HTMLButtonElement

    if (activeButton) {
      requestAnimationFrame(() => {
        const rect = activeButton.getBoundingClientRect()
        handleUpdateButtonPos(rect)
      })
    }
  }, [handleUpdateButtonPos, buttonsClass])

  return { buttonCollectionRef, backgroundPos, handleUpdateButtonPos }
}

export default useButtonCollection
