import React from 'react'
import { useMenuContext } from '../../Context/MenuContext'





const MenuStats = () => {
  const { totalPrice, readyTime, healthScorePromedio } = useMenuContext()
 


  return (
      <div className="menuStats container col-4 ms-5">
      <div className="stats">💸Precio Total ${totalPrice()}</div>
      <div className="stats">⏲️Tiempo total de preparacion {readyTime()} minutos </div>
      <div className="stats">Promedio Healt Score {healthScorePromedio()} </div>         
      </div>
  )
}

export default MenuStats