import React from 'react'


import './home.css'
import Navbar from "../Navbar/Navbar";
import Search from '../Search/SearchContainer';
import MenuContainer from '../Menu/MenuContainer';
//import MenuDetail from './MenuDetail';

const Home = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="home container">
       <MenuContainer />        
       <Search />
      </main>
    </>
  )
}

export default Home