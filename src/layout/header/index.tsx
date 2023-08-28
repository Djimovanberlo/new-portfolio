import Nav from 'layout/nav'

const Header = ({ sectionName }) => (
  <header className='header' data-name={sectionName}>
    <div>Header</div>
    <Nav />
  </header>
)

export default Header
