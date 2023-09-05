import { H3, P } from 'components/typography'

const ProjectsModal = ({ imgRef, projectsRef }) => {
  const handleClick = () => {
    const dataImage = imgRef?.current?.getAttribute('data-image')
    const cell = document.querySelector(`[data-key="${dataImage}"]`)

    const modalEl = imgRef.current.parentElement
    const imgRect = imgRef.current.getBoundingClientRect()
    const cellRect = cell?.getBoundingClientRect()

    modalEl.style.display = 'none'
    projectsRef.current.style.opacity = 1

    cell?.animate(
      [
        {
          zIndex: 2,
          transform: `
            translateX(${imgRect.left - cellRect!.left}px)
            translateY(${imgRect.top - cellRect!.top}px)
            scale(${imgRect.width / cellRect!.width})
          `,
        },
        {
          zIndex: 2,
          transform: `
            translateX(0)
            translateY(0)
            scale(1)
           `,
        },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
      }
    )
  }

  return (
    <div id='projectsModal' className='projectsModal'>
      <H3>MODAL</H3>
      <P>content</P>
      <img ref={imgRef} onClick={handleClick} className='projectsModal__img' />
    </div>
  )
}

export default ProjectsModal
