import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import Content from 'components/content'
import { aboutText, aboutTitle } from 'components/lib/copy'
import Timeline from 'components/timeline'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'

const AboutSection = () => {
  const handleClick = () => {}
  const buttons = ['button1', 'button2'].map((text, index) => <Button key={index} text={text} handleClick={handleClick} />)
  const img = <img src='https://via.placeholder.com/150' alt='placeholder' />

  return (
    <Section id={SectionNames.About} className={SectionNames.About}>
      <div className='about__container'>
        <Content title={aboutTitle} text={aboutText} imageWrapperId='aboutContentImage' image={img} />
        <ButtonCollection buttons={buttons} />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
