import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {

    const [data, setData] = useState('')

    const getData = async() => {
        try {
            const response = await axios.get('http://localhost:8000/')
            console.log(response.data)
            setData(response.data)     
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <div>{data}</div>
  )
}

export default App