import { H3, P } from 'components/typography'
import getFlipProperties from 'lib/flip'

const ProjectsModal = ({ imgRef, projectsRef, projectData }) => {
  const { title, text, img, stack } = projectData

  const handleClick = () => {
    const dataImage = imgRef?.current?.getAttribute('data-image')
    const cell = document.querySelector(`[data-key="${dataImage}"]`)

    const modalEl = imgRef.current.parentElement
    const imgRect = imgRef.current.getBoundingClientRect()
    const cellRect = cell?.getBoundingClientRect()

    modalEl.style.display = 'none'
    projectsRef.current.style.opacity = 1

    const { transforms, options } = getFlipProperties({
      prevRect: imgRect,
      finalRect: cellRect!,
    })

    cell?.animate(transforms, options)
  }

  return (
    <div id='projectsModal' className='projectsModal'>
      <img
        ref={imgRef}
        src={img}
        alt='projectImg'
        onClick={handleClick}
        className='projectsModal__img'
      />
      <H3 className='projectsModal__title'>{title}</H3>
      <P className='projectsModal__body'>{text}</P>
    </div>
  )
}

export default ProjectsModal
