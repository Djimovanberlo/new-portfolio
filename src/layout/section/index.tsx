const Section = ({ className = '', children, sectionName }) => (
  <section className={'section' + className} data-name={sectionName}>
    {children}
  </section>
)

export default Section
