import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Container from './Container'

function App() {

    const [photo, setPhoto] = useState(null)
    const [date, setDate] = useState(null)

    
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
      fetchData()
    }, [])
  
  return (
    <Container/>
  );
}

export default App;
