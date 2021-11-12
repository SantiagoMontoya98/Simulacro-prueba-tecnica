import React, { useState } from 'react'
import { fileUpload } from '../helpers/fileUpload'
import {url} from '../helpers/url'
import '../styles/FormularioStyles.css'

const Formulario = () => {

  const [carro,setCarro] = useState({
    nombre: '',
    placa: '',
    modelo: '',
    color: '',
    imagen: ''
  })

  const [mostrar, setMostrar] = useState("");

  const handleChange = ({target}) => {
    setCarro({
      ...carro,
      [target.name]: target.value
    })    
  }

  const handleSubmit = (e) => {

    e.preventDefault();

  }  

  const handleFileChange = async (e) => {

    const file = e.target.files[0];

    let urlImg = await fileUpload(file);

    carro.imagen = urlImg;

  }

  const postData = async () => {

    await fetch(url,{
      method: 'POST',
      body: JSON.stringify(carro),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    setMostrar("mostrar");

  }  

  return (

    <div>

      <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Carros</h2>
           <hr/>
               <div>
                   <label>Nombre</label>
                   <input id="inputNombre" name="nombre" 
                    onChange={handleChange}/>
               </div>
               <div>
                   <label>Placa</label>
                   <input id="inputPlaca" name="placa" 
                    onChange={handleChange}/>
               </div>
               <div>
                   <label>Modelo</label>
                   <input id="inputModelo" type="text" name="modelo" 
                    onChange={handleChange}/>
               </div>
               <div>
                   <label>Color</label>
                   <input id="inputTelefono" type="text" name="color" 
                    onChange={handleChange}/>
               </div>               
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" 
                    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button id="btnRegistro" onClick={postData}>Enviar</button> 
               </div>
                <div>
                 <p className={mostrar}>Registro exitoso</p>
                </div> 

           </form>
      
    </div>

  )
}

export default Formulario
