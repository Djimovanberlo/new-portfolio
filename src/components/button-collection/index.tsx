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

    setActiveBtnPosition(relativePos)
    handleClick()
  }
  console.log('Relative', activeBtnPosition)
  const buttons = buttonsData.map((buttonText, index) => <Button key={`${id} ${index}`} text={buttonText} handleClick={handleClicker} />)

  return (
    <div id='buttonCollection'>
      <div className='buttonCollection__subTab' style={{ transform: `translateX(${activeBtnPosition.left}px)`, width: activeBtnPosition.width, height: activeBtnPosition.height }} />
      {buttons}
    </div>
  )
}

export default ButtonCollection
