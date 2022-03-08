import React from 'react'
import DishDetail from '../DishDetail/DishDetail'

const MenuDetail = () => {
  return (
      <div className="col-6  row row-cols-1 d-flex flex-row flex-wrap">
          <DishDetail btn='borrar' title='Prueba1' id="1" img='https://spoonacular.com/recipeImages/716426-312x231.jpg' desc='soy una prueba' width='10' />
          <DishDetail btn='borrar' title='Prueba1' id="1" img='https://spoonacular.com/recipeImages/716426-312x231.jpg' desc='soy una prueba' width='10' />
          <DishDetail btn='borrar' title='Prueba1' id="1" img='https://spoonacular.com/recipeImages/716426-312x231.jpg' desc='soy una prueba' width='10' />
          <DishDetail btn='borrar' title='Prueba1' id="1" img='https://spoonacular.com/recipeImages/716426-312x231.jpg' desc='soy una prueba' width='10' />
     </div>
  )
}

export default MenuDetail