import React from 'react'
import './home.css'
import Navbar from "../Navbar/Navbar";
import Search from '../Search/SearchContainer';
import MenuContainer from '../Menu/MenuContainer';


const Home = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
     
        <section className="menu">
          <MenuContainer />   
        </section>
        <section className="search ">
          <Search />
        </section>
     
    </>
  )
}

export default Home