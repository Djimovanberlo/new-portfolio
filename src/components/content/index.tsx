import { P, H3, H2 } from 'components/typography'

const Content = ({ title, text, imageWrapperId, image }) => {
  return (
    <div className='content'>
      <H2 isUnderlined>{title}</H2>
      <div className='content__imageText'>
        <P>{text}</P>
        <div className='content__imageWrapper' id={imageWrapperId}>
          {image}
        </div>
      </div>
    </div>
  )
}

export default Content
