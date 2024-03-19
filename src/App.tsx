import Header from 'layout/header'
import Main from 'layout/main'
import './styles/main.scss'
import 'styles/app.scss'

import { DynamicRefsProvider } from 'lib/hooks/useDynamicRefs'

const App = () => {
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
