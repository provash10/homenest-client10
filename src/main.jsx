import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster position="top-right" reverseOrder={false} />
    <ToastContainer />
  </StrictMode>,
)
