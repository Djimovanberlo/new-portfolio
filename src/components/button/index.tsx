import { forwardRef } from 'react'

export const HoverButton = ({ text, handleClick, className = '', id = '' }) => {
  return (
    <button id={id} className={`hoverButton ${className}`} onClick={handleClick}>
      {text}
    </button>
  )
}

// TODO handle <any, any> types
const Button = forwardRef<any, any>(({ id = '', className = '', name = '', isActive, handleClick, children }, ref) => (
  <button ref={ref} id={id} className={`button ${className ?? ''}`} name={name} onClick={handleClick} data-active={isActive}>
    {children}
  </button>
))

export default Button
