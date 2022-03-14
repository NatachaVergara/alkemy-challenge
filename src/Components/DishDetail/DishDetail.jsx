/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useMenuContext } from '../../Context/MenuContext'
import ModalVermas from '../Modales/ModalVermas';


const DishDetail = ({ btn, title, id, img, desc, width, receta, pClass, vegan, glutenFree, dairyFree, vegetarian }) => {
  const [show, setShow] = useState(false);
  const { addMenuItem, eraseMenuItem } = useMenuContext()

  const onHide = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <div className={pClass} key={id}>
        <div className="card " style={{ width: width }}>
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title" >{title} </h5>
            <p>Is vegan : {vegan === true ? '☑️' : '❎'} </p>
            <p>Is Vegetarian : {vegetarian === true ? '☑️' : '❎'} </p>
            <p>Is gluten Free : {glutenFree === true ? '☑️' : '❎'} </p>
            <p>Is dairy Free : {dairyFree === true ? '☑️' : '❎'} </p>
            
            {btn === 'add' ? <button onClick={() => addMenuItem(receta)}
              className="btn btn-primary"  >{btn}
            </button> :
              <button onClick={() => eraseMenuItem(id)}
                className="btn btn-primary"  >{btn}
              </button>
            }
            <a className="btn"
              onClick={handleShow}              
            >more info</a>
          </div>
        </div>
      </div>
      <ModalVermas
        show={show}
        onHide={onHide}
        desc={desc}
        title={title}
      /> 

    </>
  )
}

export default DishDetail