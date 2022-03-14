import React from 'react'
import DishDetail from './DishDetail'

const DishDetailContainer = ({ recetas }) => {
  console.log(recetas)
 

  
  return (
      <>
          {recetas.map(receta => {
            return <DishDetail key={receta.id} btn='add' title={receta.title} id={receta.id} img={receta.image} desc={receta.summary} width='17rem' receta={receta} vegan={receta.vegan} pClass="col-3 col-md-6 ps-md-1 col-lg-3 mt-2" glutenFree={receta.glutenFree}
              dairyFree={receta.dairyFree} vegetarian={receta.vegetarian} />
          })}
         
        </>
  )
}

export default DishDetailContainer