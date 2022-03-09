import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'
import DishDetail from '../DishDetail/DishDetail'

const MenuDetail = () => {
  const { menuList} = useMenuContext()
  

  return (
    <div className="menuDetail col-6  row row-cols-1 d-flex flex-row flex-wrap">
      {
        menuList.map(menu => {
          return <DishDetail btn='borrar' key={menu.id} id={menu.id} img={menu.image} width='10' title={menu.title} fs='6' />
        })
      }
     </div>
  )
}

export default MenuDetail