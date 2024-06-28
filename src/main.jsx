import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='ml-5 mr-5'>
    <React.StrictMode>
    <ToastContainer stacked />
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>
  </div>
)
