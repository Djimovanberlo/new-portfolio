import Header from 'layout/header'
import Main from 'layout/main'
import './styles/main.scss'
import 'styles/app.scss'

import { StrictMode, useRef } from 'react'
// import { useScrollspy } from 'lib/hooks/useScrollSpy'
import { DynamicRefsProvider } from 'lib/hooks/useDynamicRefs'

const App = () => {
  // const sectionRefs = [useRef(null), useRef(null), useRef(null)] // Create refs for each section
  // const activeId = useScrollspy({ refs: sectionRefs, offset: 0 })

  return (
    <DynamicRefsProvider>
      <div className='app'>
        <Header />
        <Main />
      </div>
    </DynamicRefsProvider>
  )
}

export default App
