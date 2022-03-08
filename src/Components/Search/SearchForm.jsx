import React from 'react'

const SearchForm = ({ buscar, updateInput, onHandleClick }) => {
  return (
     
          <form className="d-flex mb-5 w-100">
              <input className="form-control me-2 w-100"
                  value={buscar}
                  onChange={updateInput}
                  type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" onClick={onHandleClick} type="submit">Buscar</button>
          </form>
    
  )
}

export default SearchForm