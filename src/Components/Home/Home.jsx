
import React from 'react'

import DishDetail from '../DishDetail/DishDetail'
import './home.css'
import Menu from './Menu'

const Home = () => {
  return (
    <main className="home">
      <Menu />      
       <DishDetail/>
    </main>
  )
}

export default Home