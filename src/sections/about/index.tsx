import { useEffect, useRef, useState } from 'react'

import { useRect } from 'lib/hooks/useRect'
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
  const { buttonRef, buttonCollectionRef, backgroundPos, handleUpdateButtonPos } = useButtonCollection()
  const [aboutState, setAboutState] = useState(about.personal)

  const handleClick = evt => {
    evt.preventDefault()
    handleUpdateButtonPos(evt)
    const buttonText = evt.target.textContent
    setAboutState(about[buttonText])
  }

  const buttons = Object.entries(about).map(([key, { title }], index) =>
    index === 0 ? (
      <Button key={index} name={key} handleClick={handleClick} ref={buttonRef}>
        {title.toLowerCase()}
      </Button>
    ) : (
      <Button key={index} name={key} handleClick={handleClick}>
        {title.toLowerCase()}
      </Button>
    )
  )

  return (
    <Section name={SectionNames.About}>
      <div className='about__container'>
        <Content key={aboutState.title} className={`about__content${aboutState.title}`} title={aboutState.title} content={<P>{aboutState.text}</P>} imageWrapperId='aboutContentImage' image={<img src={aboutState.img} alt='placeholder' />} />
        <ButtonCollection buttons={buttons} backgroundPos={backgroundPos} ref={buttonCollectionRef} />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
