import { H2 } from 'components/typography'

const AboutContent = ({ className = '', title, content, imgSrc }) => {
  return (
    <div className={`aboutContent ${className}`}>
      <H2 isUnderlined>{title}</H2>
      <div className='aboutContent__imageText'>
        {content}
        <div className='aboutContent__imageWrapper'>
          {<img alt={imgSrc} src={imgSrc} />}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
