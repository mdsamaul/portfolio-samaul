import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Mode from './components/Mode/Mode'
import './index.css'
import router from './routes/routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <div>
        <div className="absolute inset-y-0 right-0 w-16 z-50">
          <Mode></Mode>
        </div>
        <RouterProvider router={router} />
      </div>
    </ParallaxProvider>
  </React.StrictMode>,
)
