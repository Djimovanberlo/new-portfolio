import { useState } from 'react'

import Content from 'components/content'
import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import projects from 'lib/copy/projects'
import Grid from 'components/grid'

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
        <Content key={projectState.title} image={<img src={projectState.img} alt='placeholder' />} title={projectState.title} imageWrapperId='temp' text={projectState.text} />
        <Grid handleClick={handleUpdateProjectState} />
      </div>
    </Section>
  )
}

export default ProjectsSection
