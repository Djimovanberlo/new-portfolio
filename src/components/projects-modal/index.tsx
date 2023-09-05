import { H3, P } from 'components/typography'
import { forwardRef } from 'react'

const ProjectsModal = forwardRef<any, any>(
  ({ modalIsOpen, handleClick }, ref) => {
    return (
      <div id='projectsModal' className='projectsModal'>
        <H3>MODAL</H3>
        <P>content</P>
        <img ref={ref} onClick={handleClick} className='projectsModal__img'>
          {/* data-modal-open={modalIsOpen}> */}
          {/* <H3>TEST</H3> */}
          {/* <img ref={ref} className='projectsModal__img' /> */}
        </img>
      </div>
    )
  }
)

export default ProjectsModal
