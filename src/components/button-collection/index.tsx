import { CSSProperties, useId, useState } from 'react'

import Button from 'components/button'

const ButtonCollection = ({ buttonsData, handleClick }) => {
  const id = useId()
  const [activeBtnPosition, setActiveBtnPosition] = useState({
    // x: 627.84375,
    // y: 284.828125,
    width: 46.78125,
    height: 28,
    top: 284.828125,
    right: 674.625,
    bottom: 312.828125,
    left: 627.84375,
  })

  const handleClicker = evt => {
    const clickedBtn = evt.target.getBoundingClientRect()
    const parentPos = document.getElementById('buttonCollection')?.getBoundingClientRect()
    const relativePos = {
      top: clickedBtn.top - parentPos!.top,
      right: clickedBtn.right - parentPos!.right,
      bottom: clickedBtn.bottom - parentPos!.bottom,
      left: clickedBtn.left - parentPos!.left,
      width: clickedBtn.width,
      height: clickedBtn.height,
    }
    console.log('Clciked', clickedBtn, parentPos)
    setActiveBtnPosition(relativePos)
    handleClick()
  }
  const buttons = buttonsData.map((buttonText, index) => <Button id={id + 1} key={`${id} ${index}`} text={buttonText} handleClick={handleClicker} />)
  console.log('R', activeBtnPosition)
  return (
    <div
      id='buttonCollection'
      style={
        {
          //   '--active-btn-x': `${activeBtnPosition.x}px`,
          //   '--active-btn-y': `${activeBtnPosition.y}px`,
          '--active-btn-width': `${activeBtnPosition.width}px`,
          '--active-btn-height': `${activeBtnPosition.height}px`,
          '--active-btn-top': `${activeBtnPosition.top}px`,
          '--active-btn-right': `${activeBtnPosition.right}px`,
          '--active-btn-bottom': `${activeBtnPosition.bottom}px`,
          '--active-btn-left': `${activeBtnPosition.left}px`,
          //   width: `${activeBtnPosition.width}px`,
        } as CSSProperties
      }>
      {buttons}
    </div>
  )
}

export default ButtonCollection
