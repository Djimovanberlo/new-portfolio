import ButtonCollection from 'components/button-collection'
import { useRef } from 'react'

const Nav = () => {
  const ref = useRef(null)

  return (
    <nav ref={ref} className='nav'>
      {/* <ButtonCollection ref={ref} /> */}
    </nav>
  )
}

export default Nav
