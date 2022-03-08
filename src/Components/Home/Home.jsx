import React from 'react'


import './home.css'
import Menu from './Menu'
import Navbar from "../Navbar/Navbar";
import Search from '../Search/Search';
import MenuDetail from './MenuDetail';

const Home = () => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="home">
        <div className="container d-flex justify-content-center align-items-center row mt-5 pt-5 mb-5 pb-5">         
            <MenuDetail />         
            <Menu />

        </div>
        
       <Search/>
      </main>
    </>
  )
}

export default Home