/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import UseApi from '../../Hooks/UseApi'
import SearchForm from './SearchForm'
import DishDetailContainer from '../DishDetail/DishDetailContainer'
import './SearchDetailContainer.css'

const getLocalApi = () => {
  let items = localStorage.getItem('apiSearchLS')

  if (items) {
    return JSON.parse(localStorage.getItem('apiSearchLS'))
  } else {
    return []
  }
}


const Search = () => {
  const [recetas, setRecetas] = useState(getLocalApi());
  const [query, setQuery] = useState('')
 

  useEffect(() => {
    localStorage.setItem('apiSearchLS', JSON.stringify(recetas))
  }, [recetas])
  
 
  console.log(query)
  const getMenu = async () => {
    await UseApi({
      query, setRecetas
})
  }
  
  useEffect(() => {
    getMenu()
  }, [query] )
  
  
  return (
    <>
      <SearchForm setQuery={setQuery} />
      <div className="dishDetailSearch container ms-md-5 row mb-lg-5">
        <DishDetailContainer  recetas={recetas} />
      </div>
    </>
  )
}

export default Search