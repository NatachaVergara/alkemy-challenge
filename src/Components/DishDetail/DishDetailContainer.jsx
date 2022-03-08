import React from 'react'
import DishDetail from './DishDetail'

const DishDetailContainer = ({ recetas }) => {



  
  return (
      < >
          {recetas.map(receta => {
              return <DishDetail key={receta.id} btn='agregar' title={receta.title} id={receta.id} img={receta.image} desc={receta.summary} width='10' receta={receta}  />
          })}

        </>
  )
}

export default DishDetailContainer