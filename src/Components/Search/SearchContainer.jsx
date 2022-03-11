/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import UseApi from '../../Hooks/UseApi'
import SearchForm from './SearchForm'
import DishDetailContainer from '../DishDetail/DishDetailContainer'


const Search = () => {
  const [recetas, setRecetas] = useState([]);
   const [query, setQuery] = useState('')

  console.log(query)
  const getMenu = async () => {
    await UseApi({query, setRecetas})
  }
  
  useEffect(() => {
    getMenu()
  }, [query] )
  
  
  return (
    <div className="mt-5 pt-5">
      <SearchForm setQuery={setQuery} />
      <div className="row ms-md-5">
        <DishDetailContainer  recetas={recetas} />

      </div>
    </div>
  )
}

export default Search