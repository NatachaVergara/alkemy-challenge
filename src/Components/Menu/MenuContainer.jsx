import React from 'react'
import MenuDetail from './MenuDetail'
import MenuStats from './MenuStats'
import './menu.css'


const MenuContainer = () => {
  return (
    <div className="menuContainer container row">
      <MenuDetail />
      <MenuStats />
    </div>
  )
}

export default MenuContainer