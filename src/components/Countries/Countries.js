import React, { useEffect, useState } from 'react';
import County from '../country/County';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        
fetch('https://restcountries.com/v3.1/all')
.then( res => res.json())
.then( data=> setCountries(data))



    }, [])

    return (
      

        <div>
            <h1> hello ami country.js theke aschi</h1>
            <h3> country:{countries.length} </h3>
            {
                countries.map ( country => <County population ={country.population} name = {country.name.common} capital = {country.capital}></County>)
            }
             {
                countries.map ( country => console.log(country))
            }
        </div>
    );
};

export default Countries;