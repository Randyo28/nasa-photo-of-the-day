import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Container from './Container'
import { API_KEY, BASE_URL } from "./constants/constants";
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';


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
    <ThemeProvider theme={theme}>
      <div className="background">
        <Container photo={photo}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
