
//import React from 'react'

import axios from 'axios'


const UseApi = async ({ query, setRecetas }) => {
  const api1y = `24f235a649d44e499d188ea2acc82e7d`
  const ap2g = 'bcdb654fd44d4a9692e33796af4230b4'

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ap2g}&query=${query}&addRecipeInformation=true&number=50`

  //const { setApiSearch} = useMenuContext()


  await axios.get(url)
    .then(res => setRecetas(res.data.results))
    .catch(err => console.error(err))

}

export default UseApi