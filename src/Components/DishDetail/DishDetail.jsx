/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'


const DishDetail = ({ btn, title, id, img, desc, width, receta, fs }) => {

  const { addMenuItem, eraseMenuItem } = useMenuContext()
  //Agrego los items a mi menuList del context
  
  if (btn === 'borrar') {
  console.log('Soy un boton de borrar')
}


  return (

   <>
       <div className="col-5 m-2" key={id}>
        <div className="card" style={{ width: width }}>
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title fs-6" >{title} </h5>
            <p className="card-text">{desc} </p>
            {btn === 'agregar' ? <button onClick={() => addMenuItem(receta)}
              className="btn btn-primary"  >{btn}
            </button> : 
              <button onClick={() => eraseMenuItem(id)}
                className="btn btn-primary"  >{btn}
              </button> }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default DishDetail