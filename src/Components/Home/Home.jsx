import React from 'react'


import './home.css'
import Menu from './Menu'
import Navbar from "../Navbar/Navbar";
import Search from '../Search/Search';

const Home = () => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="home">
        <Menu />
       <Search/>
      </main>
    </>
  )
}

export default Home