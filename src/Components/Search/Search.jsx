/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import DishDetail from '../DishDetail/DishDetail'
import Navbar from '../Navbar/Navbar'
import UseApi from '../../Hooks/UseApi'


const Search = () => {
  const [recetas, setRecetas] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [query, setQuery] = useState('')


  const getMenu = async () => {
    await UseApi({query, setRecetas})
  }
  
  useEffect(() => {
    getMenu()
  }, [query] )
  
  const updateInput = (e) => {
    setBuscar(e.target.value)
  }


  const onHandleClick = (e) => {
    e.preventDefault();
   
    setQuery(buscar)
    setBuscar('')
  }


  

  return (
    <div >    
      <h1 className="text-center mb-5">Buscar Menu</h1>
      <form className="d-flex mb-5 w-100">
        <input className="form-control me-2 w-100" 
          value={buscar}  
          onChange={updateInput}
          type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={onHandleClick} type="submit">Buscar</button>
      </form>
      <div className="row ms-md-5">
      {recetas.map(item => {
      return  <DishDetail btn='agregar' id={item.id} title={item.title} img={item.image} desc={item.summary} />

        
      })}
      </div>
    </div>
  )
}

export default Search