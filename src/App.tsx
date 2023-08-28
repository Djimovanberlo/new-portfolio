import Header from 'layout/header'
import Main from 'layout/main'
import Footer from 'layout/footer'
import './styles/main.scss'
import 'styles/app.scss'

import { SectionNames } from 'interfaces/layout'

const App = () => (
  <div className='app'>
    <Header sectionName={SectionNames.Banner} />
    <Main />
    {/* <Footer /> */}
  </div>
)

export default App
