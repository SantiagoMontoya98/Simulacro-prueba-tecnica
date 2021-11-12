import React, { useEffect, useState } from 'react'
import '../styles/ListaStyles.css'
import {url} from '../helpers/url'

const Lista = () => {

  const [carro, setCarro] = useState([])

  useEffect(() => {

    getData();
    
  }, [])

  useEffect(() => {

    getData();
    
  }, [carro])

  const getData = async () => {
    let peticion = await fetch(url);
    let data = await peticion.json();
    setCarro(data);
  }

  const deleteData = async (id) => {

    await fetch(`${url}/${id}`, {
      method: "DELETE"
    });

  }  

  return (

    <div>

      <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Imagen</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {

                        carro.map((el, index) => {

                            return(

                              <tr key={index}>
                                <td>{el.nombre}</td>
                                <td>{el.placa}</td>
                                <td>{el.modelo}</td>
                                <td>{el.color}</td>
                                <td><img src={el.imagen} alt="" width="50"height="50"/></td>
                                <td><button onClick={() => deleteData(el.id)}>Eliminar</button></td>
                              </tr>

                            )

                        })

                     }
                   
                 </tbody>
        </table>
      
    </div>

  )
}

export default Lista
