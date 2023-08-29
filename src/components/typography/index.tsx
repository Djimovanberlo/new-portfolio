export const H1 = ({ style = {}, className = '', children }) => (
  <h1 style={style} className={'h1' + className}>
    {children}
  </h1>
)

export const H2 = ({ style = {}, className = '', children }) => (
  <h2 style={style} className={'h2' + className}>
    {children}
  </h2>
)

export const H3 = ({ style = {}, className = '', children }) => (
  <h3 style={style} className={'h3' + className}>
    {children}
  </h3>
)

export const P = ({ style = {}, className = '', children }) => (
  <p style={style} className={'p' + className}>
    {children}
  </p>
)
