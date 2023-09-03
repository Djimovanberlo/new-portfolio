import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import useButtonCollection from 'lib/hooks/useButtonCollection'

const Nav = ({ activeId }) => {
  const { buttonCollectionRef, backgroundPos, buttonRef, handleUpdateButtonPos } = useButtonCollection()

  const handleClick = evt => {
    evt.preventDefault()
    handleUpdateButtonPos(evt)
  }

  const buttons = Object.values(SectionNames).map((title, index) => {
    const isActive = activeId === title
    return index === 0 ? (
      <Button key={index} name={title} handleClick={handleClick} isActive={isActive} ref={buttonRef}>
        home
      </Button>
    ) : (
      <Button key={index} name={title} handleClick={handleClick}>
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
