import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'

const Nav = ({ activeId }) => {
  const handleClick = evt => {
    evt.preventDefault()
    const rect = evt.target.getBoundingClientRect()

    const element = document.getElementById(evt.target.name)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='nav'>
      {/* <ButtonCollection
        buttons={renderButtons}
        backgroundPos={backgroundPos}
        ref={buttonCollectionRef}
      /> */}
    </nav>
  )
}

export default Nav
