import { H1, H2, H3, P } from 'components/typography'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'

const BannerSection = () => (
  <Section sectionName={SectionNames.Banner}>
    <H1>Big header</H1>
    <H2>Medium header</H2>
    <H3>Small header</H3>
    <P>Paragraph</P>
  </Section>
)

export default BannerSection
