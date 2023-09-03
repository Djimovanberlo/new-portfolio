import { useRef, useState } from 'react'

import Content from 'components/content'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import projects from 'lib/copy/projects'
import Grid from 'components/grid'
import ProjectContent from 'components/project-content'
import { useRect } from 'lib/hooks/useRect'

const ProjectsSection = () => {
  const { rect: imgRect, ref: imgRef } = useRect()
  const [projectState, setProjectState] = useState(projects.portfolio)

  const handleUpdateProjectState = evt => {
    evt.preventDefault()
    const projectName = evt.target.id
    setProjectState(projects[projectName])
  }

  return (
    <Section id={SectionNames.Projects} className={SectionNames.Projects}>
      <div className='projects__container'>
        <Content key={projectState.title} ref={imgRef} title={projectState.title} content={<ProjectContent stackArr={projectState.stack} text={projectState.text} />} imageWrapperId='temp' />
        <Grid handleClick={handleUpdateProjectState} imgRect={imgRect} />
      </div>
    </Section>
  )
}

export default ProjectsSection
