import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import Home from './app/pages/home'
import About from './app/pages/about'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/global.scss'

const router = createBrowserRouter([
  {
    path: "/HireMe/",
    element: <App />,
    children: [
      {
        path: "/HireMe/",
        element: <Home />
      },
      {
        path: "/HireMe/about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
