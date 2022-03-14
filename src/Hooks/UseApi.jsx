
//import React from 'react'

import axios from 'axios'


const UseApi = async ({ query, setRecetas }) => {
  //ntch yahoo
 // const api1 = `24f235a649d44e499d188ea2acc82e7d`
  
  //ntch gmail
 // const api2 = 'bcdb654fd44d4a9692e33796af4230b4'
  
  //todo.hotmail
  const api3 = 'a2ff818ee82c4b92b30209b18a1327fd'  

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api3}&query=${query}&addRecipeInformation=true&number=50`

  //const { setApiSearch} = useMenuContext()


  await axios.get(url)
    .then(res => setRecetas(res.data.results))
    .catch(err => alert(err.message))

}

export default UseApi