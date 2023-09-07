import { useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import about from 'lib/copy/about'
import useButtonCollection from 'lib/hooks/useButtonCollection'
import Section from 'layout/section'
import ButtonCollection from 'components/button-collection'
import AboutContent from 'components/about-content'
import Timeline from 'components/timeline'
import Button from 'components/button'

const AboutSection = () => {
  const buttonsClass = 'aboutButton'
  const { buttonCollectionRef, backgroundPos, handleUpdateButtonPos } =
    useButtonCollection({ buttonsClass })
  const [aboutState, setAboutState] = useState(about.personal)

  console.log('???')

  const handleClick = evt => {
    evt.preventDefault()
    const rect = evt.target.getBoundingClientRect()
    handleUpdateButtonPos(rect)

    const buttonText = evt.target.textContent
    setAboutState(about[buttonText])
  }

  const renderButtons = Object.entries(about).map(([key, { title }], index) => {
    const isActive = aboutState.title === title
    // const isActive = false
    return (
      <Button
        key={index}
        className={buttonsClass}
        name={key}
        handleClick={handleClick}
        isActive={isActive}>
        {title.toLowerCase()}
      </Button>
    )
  })

  return (
    <Section name={SectionNames.About}>
      <div className='about__container'>
        <AboutContent
          key={aboutState.title}
          className={`about__content${aboutState.title}`}
          title={aboutState.title}
          text={aboutState.text}
          stack={aboutState.stack}
          imgSrc={aboutState.img}
        />
        <ButtonCollection
          buttons={renderButtons}
          backgroundPos={backgroundPos}
          ref={buttonCollectionRef}
        />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
