import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { SubstanceProvider } from './context/provider'
import { AuthProvider } from './context/AuthProvider'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SubstanceProvider>
        <RouterProvider router={router} />
      </SubstanceProvider>
    </AuthProvider>
  </React.StrictMode>
)
