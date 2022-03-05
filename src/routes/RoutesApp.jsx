import React from 'react'
import { Route, Routes } from "react-router-dom";
//import Search from '../Components/Search/Search';
import HomeContainer from '../Pages/HomeContainer';
import LoginContainer from '../Pages/LoginContainer';


const RoutesApp = () => {
  return (
      <Routes>
        
       <Route path='/' element={<LoginContainer />} />
        <Route path='/home' element={<HomeContainer />} />
        {/* <Route path='/search' element={<Search />} /> */}
      </Routes>
      
  )
}

export default RoutesApp