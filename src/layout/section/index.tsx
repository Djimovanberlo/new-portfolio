import { ReactNode, useEffect, useRef } from 'react'

import { SectionNames } from 'interfaces/layout'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

interface Props {
  name: SectionNames
  children: ReactNode
}

const Section = ({ name, children }: Props) => {
  const { addRef } = useDynamicRefs()
  const sectionRef = useRef(null)

  useEffect(() => {
    addRef(sectionRef)
  }, [addRef])

  return (
    <section id={name} ref={sectionRef} className={`section ${name}`}>
      {children}
    </section>
  )
}

export default Section
