import React, { useState, useEffect } from 'react'



import axios from 'axios'

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

const App = () => {
  
  const [search, setSearch] = useState('')
  const [countriesFound, setCountriesFound] = useState([])
 


  var filteredCountries = countriesFound



  useEffect(() => {axios.get(search).then(response => setCountriesFound(response.data) )}, [search])

  const handleSearchChange = (event) => {
    setSearch('https://restcountries.eu/rest/v2/name/' + event.target.value)
    console.log(search)
    console.log(countriesFound)
  
    
    //axios.get('https://restcountries.eu/rest/v2/name/' + search).then(response => setCountriesFound(response.data) )
  }

  
 

  return (
    <div>    Busca un país: <input onChange={handleSearchChange} />
  

    <div key={getRandomString(5)}>
                
        <Countries filteredCountries={filteredCountries} />
        
      </div>
       
    </div>
  )


}

const Countries = ({filteredCountries}) => {

    var fistro = filteredCountries

    const disp = () => {
      return (<div> 
        {fistro.map((cnt) => (
        
        <p key={getRandomString(5)}>{cnt.name}</p>
        ))}
        </div>)
     
      
    }



    const allInfo = () => {
      return (<div> 
        {fistro.map((cnt) => (
        <>
        <h1 key={getRandomString(5)}>{cnt.name}</h1>
        <span key={getRandomString(5)}>Capital: {cnt.capital}</span> <br />
        <span key={getRandomString(5)}>Population: {cnt.population}</span>
        <h2>languages</h2>
        <ul>
          {cnt.languages.map(lan => <li key={getRandomString(5)}> {lan.name}</li>)}
         
        </ul>
        <img src={cnt.flag} width="300px" alt="flag"/>
        </>
        ))}
        </div>)
     
      
    }
  

    if (Array.isArray(fistro) && fistro.length === 1) {
      console.log("pepe")
      return (<div key={getRandomString(5)}>joder ya {allInfo()}</div>)
    }

    if (Array.isArray(fistro) && fistro.length > 10) {
    
      return (<div key={getRandomString(5)}>Demasiados</div>)
    }

    if (Array.isArray(fistro) && fistro.length < 11) {
      console.log("pepe")
      return (<div key={getRandomString(5)}>{disp()}</div>)
    }

    
   return <div key={getRandomString(5)}>Busca</div>
   


}



export default App