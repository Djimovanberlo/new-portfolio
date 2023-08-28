import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        // nav
        // main
        // footer
        <div>
          <h1>Hello World</h1>
          <Link to='about'>About Us</Link>
        </div>
      ),
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
