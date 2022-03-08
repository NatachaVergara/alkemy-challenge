/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'


const DishDetail = ({ btn, title, id, img, desc, width, receta, fs }) => {
 
  const { addMenuItem } = useMenuContext()
  //Agrego los items a mi menuList del context
  const addItemMenu = () => {
    console.log('estoy haciendo click')
    addMenuItem(receta)
    
  }
  

  return (
    <div className="col-5 m-2" key={id}>
      <div className="card" style={{ width: width }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title fs-6" >{title} </h5>
          <p className="card-text">{desc} </p>
          <button onClick={addItemMenu}
            className="btn btn-primary"  >{btn}</button>
        </div>
      </div>
    </div>
  )
}

export default DishDetail