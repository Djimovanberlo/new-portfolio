import { H2 } from 'components/typography'
import { forwardRef } from 'react'

interface Props {
  className?: string
  title: string
  content: JSX.Element
  imageWrapperId: string
  image: JSX.Element
}

const Content = forwardRef<HTMLDivElement, Props>(
  ({ className = '', title, content, imageWrapperId, image }, ref) => {
    return (
      <div className={`content ${className}`}>
        <H2 isUnderlined>{title}</H2>
        <div className='content__imageText'>
          {content}
          <div ref={ref} className='content__imageWrapper' id={imageWrapperId}>
            {image}
          </div>
        </div>
      </div>
    )
  }
)

export default Content
