/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import UseApi from '../../Hooks/UseApi'
import SearchForm from './SearchForm'
import DishDetailContainer from '../DishDetail/DishDetailContainer'


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
      <SearchForm   buscar={buscar} updateInput={updateInput}  onHandleClick={onHandleClick} />
      <div className="row ms-md-5">
        <DishDetailContainer  recetas={recetas} />

      </div>
    </div>
  )
}

export default Search