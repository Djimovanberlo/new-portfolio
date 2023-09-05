import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import Grid from 'components/grid'
import { useRect } from 'lib/hooks/useRect'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'

const ProjectsSection = () => {
  // const { rect: imgRect, ref: imgRef } = useRect()
  const imgRef = useRef(null)
  const projectsRef = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }
  // const [projectState, setProjectState] = useState(projects.portfolio)

  // const handleUpdateProjectState = evt => {
  //   evt.preventDefault()
  //   const projectName = evt.target.id
  //   setProjectState(projects[projectName])
  // }

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal
        ref={imgRef}
        modalIsOpen={modalIsOpen}
        handleClick={closeModal}
      />
      <div ref={projectsRef} className='projects__container'>
        <H2>Projects</H2>
        <P>
          Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem{' '}
        </P>
        <Grid
          modalIsOpen={modalIsOpen}
          handleClick={openModal}
          imgRef={imgRef}
          projectsRef={projectsRef}
        />
      </div>
    </Section>
  )
}

export default ProjectsSection
