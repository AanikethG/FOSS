import { useEffect } from 'react';
import './App.css'
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getAPI = async () => {
      const res = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/home`)
      setData(res.data.data)
    }
    getAPI()
  }, [])
  return (
    <>
      <p>hello</p>
      <p>{data}</p>
    </>
  )
}

export default App
