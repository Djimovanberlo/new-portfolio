import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import ProjectsGrid from 'components/projects-grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'
import projects from 'lib/copy/projects'

const ProjectsSection = () => {
  const imgRef = useRef<any>(null)
  const projectsRef = useRef(null)
  const [projectsState, setProjectsState] = useState(projects['sisoe']) //TODO what's default here?

  const handleChangeActiveProject = (projectKey: string) => {
    setProjectsState(projects[projectKey])
  }

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal
        imgRef={imgRef}
        projectsRef={projectsRef}
        projectData={projectsState}
      />
      <div ref={projectsRef} className='projects__container'>
        <H2 isUnderlined>Projects</H2>
        <P>
          Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem{' '}
        </P>
        <ProjectsGrid
          imgRef={imgRef}
          projectsRef={projectsRef}
          handleChangeActiveProject={handleChangeActiveProject}
        />
      </div>
    </Section>
  )
}

export default ProjectsSection
