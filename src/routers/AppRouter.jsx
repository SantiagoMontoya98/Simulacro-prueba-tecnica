import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'

const AppRouter = () => {

  return (

    <div>

      <BrowserRouter>

        <NavBar />
      
        <Routes>

          <Route exact path="/registro" element={ <Formulario /> } />

          <Route exact path="/lista" element={ <Lista /> } />

        </Routes>
      
      </BrowserRouter>
      
    </div>

  )
}

export default AppRouter
