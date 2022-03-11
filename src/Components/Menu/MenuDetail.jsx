import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'
import DishDetail from '../DishDetail/DishDetail'

const MenuDetail = () => {
  const { menuList} = useMenuContext() 

  return (
    <div className="dishDetailContainer row">
      {
        menuList.map(menu => {
          return <DishDetail btn='borrar' key={menu.id} id={menu.id} img={menu.image} width='15rem' title={menu.title} vegan={menu.vegan} pClass='col-6 mb-5'  />
        })
      }
      
      {/* <DishDetail />
      <DishDetail />
      <DishDetail />
      <DishDetail /> */}
     </div>
  )
}

export default MenuDetail