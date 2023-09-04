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

// TODO handle <any, any> types
const Button = forwardRef<any, any>(
  (
    { id = '', className = '', name = '', isActive, handleClick, children },
    ref
  ) => (
    <button
      ref={ref}
      id={id}
      className={`button ${className ?? ''}`}
      name={name}
      onClick={handleClick}
      data-active={isActive}>
      {children}
    </button>
  )
)

export default Button
