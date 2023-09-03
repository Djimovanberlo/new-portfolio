import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import useButtonCollection from 'lib/hooks/useButtonCollection'

const Nav = ({ activeId }) => {
  const buttonsClass = 'navButton'
  const { buttonCollectionRef, backgroundPos, handleUpdateButtonPos } = useButtonCollection({ buttonsClass })

  const handleClick = evt => {
    evt.preventDefault()
    const rect = evt.target.getBoundingClientRect()
    handleUpdateButtonPos(rect)

    const element = document.getElementById(evt.target.name)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const buttons = Object.values(SectionNames).map((title, index) => {
    const isActive = activeId === title
    return (
      <Button key={index} className={buttonsClass} name={title} handleClick={handleClick} isActive={isActive}>
        home
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
