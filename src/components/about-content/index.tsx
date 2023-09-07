import { H2, P } from 'components/typography'

const AboutContent = ({ className = '', title, text, stack, imgSrc }) => {
  console.log('S', title)
  return (
    <div className={`aboutContent ${className}`}>
      <H2 isUnderlined>{title}</H2>
      <div className='aboutContent__imageText'>
        <div>
          <P>{text}</P>
          {!!stack.length && <P>{stack[0]}</P>}
        </div>
        <div className='aboutContent__imageWrapper'>
          {<img alt={imgSrc} src={imgSrc} />}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
