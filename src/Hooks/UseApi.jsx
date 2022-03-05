import{ useEffect, useState } from 'react'
import axios from 'axios'


const UseApi = (url) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
    }).catch(err => {
      console.log(err);
    })
  },[url]);

  console.log(data)
  return {data}
}

export default UseApi