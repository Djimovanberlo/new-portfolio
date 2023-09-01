import { useState } from 'react'

import ButtonCollection from 'components/button-collection'
import Content from 'components/content'
import Timeline from 'components/timeline'
import about from 'lib/copy/about'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'

const AboutSection = () => {
  const [aboutState, setAboutState] = useState(about[0])
  const handleClick = () => setAboutState(aboutState === about[0] ? about[1] : about[0])
  const buttonsData = about.map(({ buttonText }) => buttonText)
  const img = <img src='https://via.placeholder.com/150' alt='placeholder' />

  return (
    <Section id={SectionNames.About} className={SectionNames.About}>
      <div className='about__container'>
        <Content title={aboutState.title} text={aboutState.text} imageWrapperId='aboutContentImage' image={img} />
        <ButtonCollection buttonsData={buttonsData} handleClick={handleClick} />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
