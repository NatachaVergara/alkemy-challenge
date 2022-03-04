import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseApi = () => {
    const apiKey = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=252c5ae41b5646a5930117203dcc3e18&addRecipeNutrition=true'



    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(apiKey)
            .then(response => {
                setData(response.data)
            }).catch(error => {console.log(error)})
    }, [])

    console.log(data)
  return (
    <div>useApi</div>
  )
}

export default UseApi