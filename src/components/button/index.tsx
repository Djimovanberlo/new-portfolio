import { forwardRef } from 'react'

export const HoverButton = ({
  id = '',
  className = '',
  name = '',
  type,
  handleClick = () => {},
  children,
}) => {
  return (
    <button
      id={id}
      className={`hoverButton ${className}`}
      name={name}
      type={type}
      onClick={handleClick}>
      {children}
    </button>
  )
}

const Button = ({
  id = '',
  name = '',
  className = '',
  isActive,
  handleClick,
  children,
}) => (
  <button
    id={id}
    className={`button ${className ?? ''}`}
    name={name}
    onClick={handleClick}
    data-active={isActive}>
    {children}
  </button>
)

export default Button
