

import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
  
<div > 

<Countries></Countries>

</div>
  );
}






// function LoadCountries (){
//   const [countries, setCountries] = useState([])
//   useEffect (()=>{
//    fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data =>setCountries(data))
//   } , [])
// return(

// <div>
//   <h1>this is our life</h1>
//   <h2>aviliable countries:{countries.length}</h2>
//   {
//  countries.map( country => <Country name={country.name.common} population ={country.population} capital = {country.capital}> </Country>)}
// </div>
// )
// }

// function Country (props){
// console.log(props)
//   return (
//     <div>
// <h2>name:{props.name}</h2>
// <h4> population:{props.population}</h4>
// <h3>capital:{props.capital}</h3>
//     </div>
//   )
// }



export default App;
