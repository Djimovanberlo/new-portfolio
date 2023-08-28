import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Footer from 'layout/footer'
import Main from 'layout/main'
import Header from 'layout/header'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default App
