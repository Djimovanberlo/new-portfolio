import { useEffect, useRef, useState } from 'react'

import { useRect } from 'lib/hooks/useRect'
import about, { aboutButtons } from 'lib/copy/about'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import ButtonCollection from 'components/button-collection'
import Content from 'components/content'
import Timeline from 'components/timeline'
import Button from 'components/button'

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

  const buttons = aboutButtons.map((buttonText, index) => {
    if (index === 0) {
      return (
        <Button key={index} ref={buttonRef} handleClick={handleClick}>
          {buttonText}
        </Button>
      )
    } else {
      return (
        <Button key={index} handleClick={handleClick}>
          {buttonText}
        </Button>
      )
    }
  })

  const img = <img src='https://via.placeholder.com/150' alt='placeholder' />

  return (
    <Section id={SectionNames.About} className={SectionNames.About}>
      <div className='about__container'>
        <Content title={aboutState.title} text={aboutState.text} imageWrapperId='aboutContentImage' image={img} />
        <ButtonCollection buttons={buttons} backgroundPos={backgroundPos} buttonCollectionRef={buttonCollectionRef} />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
