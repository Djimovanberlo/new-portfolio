import { forwardRef } from 'react'

export const HoverButton = ({ text, handleClick, className = '', id = '' }) => {
  return (
    <button id={id} className={`hoverButton ${className}`} onClick={handleClick}>
      {text}
    </button>
  )
}

// TODO handle <any, any> types
const Button = forwardRef<any, any>(({ id = '', className = '', handleClick, children }, ref) => (
  <button ref={ref} id={id} className={`button ${className ?? ''}`} onClick={handleClick}>
    {children}
  </button>
))

export default Button
