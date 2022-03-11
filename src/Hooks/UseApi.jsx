/* eslint-disable no-unused-vars */
import axios from 'axios'


const UseApi = async ({ query, setRecetas}) => {
  const api1 = `ced8366e650549cc8c0aa4d433e1ab04`

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api1}&query=${query}&addRecipeInformation=true&number=10`
  

  await axios.get(url)
    .then(res => setRecetas(res.data.results))
    .catch(err => console.error(err))
    
}

export default UseApi