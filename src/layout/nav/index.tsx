import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import { useState } from 'react'

const Nav = ({ activeId }) => {
  const [activeSection, setActiveSection] = useState<SectionNames>(
    SectionNames.Banner
  )

  console.log('ACTIVE ID', activeId)

  const handleClick = evt => {
    evt.preventDefault()

    console.log(evt.target.name)
    const element = document.getElementById(evt.target.name.toLowerCase())
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const buttons = Object.keys(SectionNames).map((sectionName, index) => ({
    buttonName: sectionName,
    text: index === 0 ? 'Djimo' : sectionName,
  }))
  const activeIndex = buttons
    .map(({ buttonName }) => buttonName)
    .findIndex(buttonName => buttonName.toLocaleLowerCase() === activeId)

  return (
    <nav className='nav'>
      <ButtonCollection
        activeIndex={activeIndex}
        buttons={buttons}
        handleClick={handleClick}
      />
      {/* <ButtonCollection
        buttons={renderButtons}
        backgroundPos={backgroundPos}
        ref={buttonCollectionRef}
      /> */}
    </nav>
  )
}

export default Nav
