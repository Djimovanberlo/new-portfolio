import { P } from 'components/typography'

export const HoverButton = ({ text, handleClick, className = '', id = '' }) => {
  return (
    <button id={id} className={`hoverButton ${className}`} onClick={handleClick}>
      {text}
    </button>
  )
}

const Button = ({ text, handleClick, className = '', id = '' }) => {
  return (
    <button id={id} className={`button ${className}`} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
