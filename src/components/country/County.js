import React from 'react';
import './country.css'
const County = (props) => {
    return (
        <div className='country'>
        
            <h1> this is my country name:{ props.name}</h1>
            <h3> this is my capital:{props.capital}</h3>
            <p> this is population:{props.population}</p>
        </div>
    );
};

export default County;