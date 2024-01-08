import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { SubstanceProvider } from './context/provider'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubstanceProvider>
        <RouterProvider router={router} />
    </SubstanceProvider>
  </React.StrictMode>,
)
