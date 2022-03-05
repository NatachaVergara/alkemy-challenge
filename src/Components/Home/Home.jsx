
import React from 'react'

import DishDetail from '../DishDetail/DishDetail'
import './home.css'
import Menu from './Menu'
import Navbar from "../Navbar/Navbar";

const Home = () => {
  let logIn = localStorage.getItem("logIn");
  return (
    <>
      <header>  {logIn ? null : <Navbar />}</header>
        <main className="home">
        <Menu />
        <DishDetail />
      </main>
    </>
  )
}

export default Home