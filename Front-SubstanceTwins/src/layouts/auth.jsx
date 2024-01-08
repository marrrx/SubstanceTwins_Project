import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

export default function Auth() {
  return (
    <main>

    <div className="logo">
      <img src="../img/logo.svg" alt="..."/>
      </div>

    <div className="form">
      <Outlet />
    </div>
 

  </main>

  

  )
}

