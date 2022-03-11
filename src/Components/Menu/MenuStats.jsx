import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'





const MenuStats = () => {
  const { totalPrice, readyTime, healthScorePromedio } = useMenuContext()



  return (
    <div className="menuStats">
      <div className="stats">
        <span role="img" aria-label="icono">💸</span>Precio Total ${totalPrice()}</div>
      <div className="stats">
        <span role="img" aria-label="icono">⏲️</span>Tiempo total de preparacion {readyTime()} minutos </div>
      <div className="stats">Promedio Healt Score {healthScorePromedio()}% </div>
    </div>
  )
}

export default MenuStats