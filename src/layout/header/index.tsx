import Nav from 'layout/nav'
import { SectionNames } from 'interfaces/layout'
import { useScrollspy } from 'lib/hooks/useScrollSpy'
import style from 'styles/variables.module.scss'

const Header = () => {
  const sectionIds = Object.values(SectionNames)
  const activeId = useScrollspy(sectionIds, 60)

  return (
    <header className='header' style={{ height: style.headerHeight }} data-name={activeId}>
      <Nav activeId={activeId} />
    </header>
  )
}

export default Header
