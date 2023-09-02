import { H2 } from 'components/typography'

const Content = ({ className = '', title, content, imageWrapperId, image }) => {
  return (
    <div className={`content ${className}`}>
      <H2 isUnderlined>{title}</H2>
      <div className='content__imageText'>
        {content}
        <div className='content__imageWrapper' id={imageWrapperId}>
          {image}
        </div>
      </div>
    </div>
  )
}

export default Content
