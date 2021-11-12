import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBarStyles.css'

const NavBar = () => {

  return (

    <div>

       <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/registro">Registro</Link>
                <Link className="link" to="/lista">Listado</Link>
                </nav>
            </div>
            <hr/>
      
    </div>

  )
}

export default NavBar
