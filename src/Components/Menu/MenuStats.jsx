import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'





const MenuStats = () => {
  const { totalPrice, readyTime, healthScorePromedio } = useMenuContext()



  return (
    <div className="menuStats">
      <div className="stats">
        <span role="img" aria-label="icono">💸</span>Total Price us ${totalPrice()}  </div>
      <div className="stats">
        <span role="img" aria-label="icono">⏲️</span>Ready in minutes {readyTime()} </div>
      <div className="stats">Total Healt Score {healthScorePromedio()}% </div>
    </div>
  )
}

export default MenuStats