/* eslint-disable no-unused-vars */
import axios from 'axios'


const UseApi = async ({ query, setRecetas}) => {
  const api = '252c5ae41b5646a5930117203dcc3e18'
  const api2 = `f65d590a7ec141e6ad7aa94dde381aed`

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api2}&query=${query}&addRecipeInformation=true&number=10`
  

  await axios.get(url)
    .then(res => setRecetas(res.data.results))
    .catch(err => console.error(err))
    
}

export default UseApi