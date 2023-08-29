import { H1 } from 'components/typography'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'

const BannerSection = () => {
  return (
    <Section id={SectionNames.Banner}>
      <H1>Big header</H1>
    </Section>
  )
}

export default BannerSection
