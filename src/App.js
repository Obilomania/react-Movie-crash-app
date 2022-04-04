import React from "react";
import { useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg"

// API KEY dc464188

const API_URL = 'http://www.omdbapi.com?apikey=dc464188'



const App = () => {

        const movieSearch = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            console.log(data); 
      }
    useEffect(() => {
            
        },[])
        movieSearch('Spiderman')
    return (
        <div >
            
        </div>
    );
}

export default App;