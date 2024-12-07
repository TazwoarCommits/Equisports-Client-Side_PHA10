import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
