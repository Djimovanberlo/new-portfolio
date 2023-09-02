import { useState } from 'react'

import Content from 'components/content'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import projects from 'lib/copy/projects'
import Grid from 'components/grid'
import ProjectContent from 'components/project-content'

const ProjectsSection = () => {
  const [projectState, setProjectState] = useState(projects.portfolio)

  const handleUpdateProjectState = evt => {
    evt.preventDefault()
    const projectName = evt.target.id
    setProjectState(projects[projectName])
  }

  return (
    <Section id={SectionNames.Projects} className={SectionNames.Projects}>
      <div className='projects__container'>
        <Content key={projectState.title} image={<img src={projectState.img} alt='placeholder' />} title={projectState.title} content={<ProjectContent stackArr={projectState.stack} text={projectState.text} />} imageWrapperId='temp' />
        <Grid handleClick={handleUpdateProjectState} />
      </div>
    </Section>
  )
}

export default ProjectsSection
