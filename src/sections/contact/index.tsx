import ContactForm from 'components/contact-form'
import { H2, P } from 'components/typography'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'

const ContactSection = () => (
  <Section name={SectionNames.Contact}>
    <div className='contact__container'>
      <H2 isUnderlined>Contact</H2>
      <P>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
      </P>
      <ContactForm />
    </div>
  </Section>
)

export default ContactSection
