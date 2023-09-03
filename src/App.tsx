import Header from 'layout/header'
import Main from 'layout/main'
import Footer from 'layout/footer'
import './styles/main.scss'
import 'styles/app.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

export default App
