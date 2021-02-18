import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Container from './Container'
import { API_KEY, BASE_URL } from "./constants/constants";

function App() {

    const [photo, setPhoto] = useState([])
    // const [date, setDate] = useState(null)


    useEffect(() => {
      const fetchData = () => {
        axios
          .get(`${BASE_URL}?api_key=${API_KEY}`)
          .then(res => {
           console.log(res.data)
            setPhoto(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
      fetchData()
    }, [])
  
  return (
    <div className="background">
    <Container photo={photo}/>
    </div>
  );
}

export default App;
