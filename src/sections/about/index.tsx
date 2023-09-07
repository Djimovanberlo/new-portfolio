import { useState } from 'react'

import about from 'lib/copy/about'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import ButtonCollection from 'components/button-collection'
import Content from 'components/content'
import Timeline from 'components/timeline'
import Button from 'components/button'
import { P } from 'components/typography'
import useButtonCollection from 'lib/hooks/useButtonCollection'

const AboutSection = () => {
  const buttonsClass = 'aboutButton'
  const { buttonCollectionRef, backgroundPos, handleUpdateButtonPos } =
    useButtonCollection({ buttonsClass })
  const [aboutState, setAboutState] = useState(about.personal)

  const handleClick = evt => {
    evt.preventDefault()
    const rect = evt.target.getBoundingClientRect()
    handleUpdateButtonPos(rect)

    const buttonText = evt.target.textContent
    setAboutState(about[buttonText])
  }

  const buttons = Object.entries(about).map(([key, { title }], index) => {
    const isActive = aboutState.title === title
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
        <Content
          key={aboutState.title}
          className={`about__content${aboutState.title}`}
          title={aboutState.title}
          content={<P>{aboutState.text}</P>}
          imageWrapperId='aboutContentImage'
          image={<img src={aboutState.img} alt='placeholder' />}
        />
        <ButtonCollection
          buttons={buttons}
          backgroundPos={backgroundPos}
          ref={buttonCollectionRef}
        />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
