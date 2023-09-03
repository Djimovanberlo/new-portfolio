import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import useButtonCollection from 'lib/hooks/useButtonCollection'
import { useEffect } from 'react'

const Nav = ({ activeId }) => {
  const { buttonCollectionRef, backgroundPos, buttonRef, handleUpdateButtonPos, setBackgroundPos } = useButtonCollection()

  useEffect(() => {
    const activeButton = document.querySelector('button.navButton[data-active="true"]')

    if (activeButton && buttonCollectionRef && buttonCollectionRef.current) {
      const rect = activeButton.getBoundingClientRect()
      const relativePos = {
        width: rect.width,
        height: rect.height,
        left: rect.left - buttonCollectionRef.current.getBoundingClientRect().left,
      }
      setBackgroundPos(relativePos)
    }
  }, [activeId, buttonCollectionRef])

  const handleClick = evt => {
    evt.preventDefault()
    handleUpdateButtonPos(evt)
    const element = document.getElementById(evt.target.name)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const buttons = Object.values(SectionNames).map((title, index) => {
    const isActive = activeId === title
    return index === 0 ? (
      <Button key={index} className='navButton' name={title} handleClick={handleClick} isActive={isActive} ref={buttonRef}>
        home
      </Button>
    ) : (
      <Button key={index} className='navButton' name={title} handleClick={handleClick} isActive={isActive}>
        {title}
      </Button>
    )
  })

  return (
    <nav ref={buttonCollectionRef} className='nav'>
      <ButtonCollection buttons={buttons} backgroundPos={backgroundPos} ref={buttonCollectionRef} />
    </nav>
  )
}

export default Nav
