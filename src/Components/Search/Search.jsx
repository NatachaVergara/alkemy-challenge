import React from 'react'
import UseApi from '../../Hooks/UseApi'
const Search = () => {
    
    const url = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=252c5ae41b5646a5930117203dcc3e18&addRecipeNutrition=true'
    const { data } = UseApi(url)   
    console.log(data)
  return (
      <div>
    </div>
  )
}

export default Search