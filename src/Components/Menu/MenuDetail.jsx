import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'
import DishDetail from '../DishDetail/DishDetail'
import MenuDetailEmpty from './MenuDetailEmpty'

const MenuDetail = () => {
  const { menuList} = useMenuContext() 

  return (
    <>
      {menuList.length === 0 ? <MenuDetailEmpty /> : <div className="dishDetailContainer mt-lg-3 pt-lg-3 row">
        {
          menuList.map(menu => {
            return <DishDetail btn='Delete' key={menu.id} id={menu.id} img={menu.image} width='15rem' title={menu.title} vegan={menu.vegan} pClass='col-6 mb-5' desc={menu.summary} />
          })
        }
      </div>}

    </>    
  )
}

export default MenuDetail