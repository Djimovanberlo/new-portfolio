const Section = ({ id = '', className = '', children }) => (
  <section id={id} className={`section ${className}`}>
    {children}
  </section>
)

export default Section
