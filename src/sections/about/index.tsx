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

const AboutSection = () => {
  // TODO extract this to custom hook for nav
  const buttonCollectionRef = useRef<HTMLDivElement | null>(null)
  const { rect, ref: buttonRef } = useRect()
  const [backgroundPos, setBackgroundPos] = useState({ width: rect.width, height: rect.height, left: 0 })
  const [aboutState, setAboutState] = useState(about.personal)

  useEffect(() => {
    if (rect) setBackgroundPos({ width: rect.width, height: rect.height, left: 0 })
  }, [rect])

  const handleClick = evt => {
    evt.preventDefault()
    if (!buttonCollectionRef?.current) return
    const buttonText = evt.target.textContent
    const clickedBtnRect = evt.target.getBoundingClientRect()
    const parentRect = buttonCollectionRef?.current?.getBoundingClientRect()

    const relativePos = {
      width: clickedBtnRect.width,
      height: clickedBtnRect.height,
      left: clickedBtnRect.left - parentRect.left,
    }
    setBackgroundPos(relativePos)
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
    <Section id={SectionNames.About} className={SectionNames.About}>
      <div className='about__container'>
        <Content key={aboutState.title} className={`about__content${aboutState.title}`} title={aboutState.title} content={<P>{aboutState.text}</P>} imageWrapperId='aboutContentImage' image={<img src={aboutState.img} alt='placeholder' />} />
        <ButtonCollection buttons={buttons} backgroundPos={backgroundPos} ref={buttonCollectionRef} />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
