import { H2 } from 'components/typography'
import { forwardRef } from 'react'

const Content = forwardRef<any, any>(({ className = '', title, content, imageWrapperId, image }, ref) => {
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
})

export default Content
