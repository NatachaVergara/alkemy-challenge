/* eslint-disable no-unused-vars */
import axios from 'axios'


const UseApi = async ({ query, setRecetas}) => {
  const api1 = `c2523e962c50421f824985aed4f8132a`

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api1}&query=${query}&addRecipeInformation=true&number=50`
  

  await axios.get(url)
    .then(res => setRecetas(res.data.results))
    .catch(err => console.error(err))
    
}

export default UseApi