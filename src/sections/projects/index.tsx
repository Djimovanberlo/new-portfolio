import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import Grid from 'components/grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'

const ProjectsSection = () => {
  const imgRef = useRef<any>(null)
  const projectsRef = useRef(null)

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal imgRef={imgRef} projectsRef={projectsRef} />
      <div ref={projectsRef} className='projects__container'>
        <H2>Projects</H2>
        <P>
          Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem{' '}
        </P>
        <Grid imgRef={imgRef} projectsRef={projectsRef} />
      </div>
    </Section>
  )
}

export default ProjectsSection
