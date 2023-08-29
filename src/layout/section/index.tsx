const Section = ({ className = '', children, sectionName }) => (
  <section id={sectionName} data-name={sectionName} className={'section' + className}>
    {children}
  </section>
)

export default Section
