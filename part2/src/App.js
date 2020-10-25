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
  const [country, setCountry] = useState(false)

  useEffect(() => {axios.get(search).then(response => setCountriesFound(response.data) )}, [search])

  const handleSearchChange = (event) => {
    setSearch('https://restcountries.eu/rest/v2/name/' + event.target.value)
    setCountry(false)
    console.log(search)
    console.log(countriesFound)
  }

  return (
    <div>    Busca un país: <input onChange={handleSearchChange} />
    <div key={getRandomString(5)}>                
        <Countries countriesFound={countriesFound} country={country} setCountry={setCountry} search={search}/>
      </div>
    </div>
  )

}

const Countries = ({countriesFound, country, setCountry, search}) => {

  if (!country){
    return <ListOfCountries countriesFound={countriesFound} setCountry={setCountry} search={search} />
  }
  
  return <Country countryData={country} />

}

const Country = ({countryData}) => {

  return (<div> 
    {countryData.map((cnt) => (
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



const ListOfCountries = ({countriesFound, setCountry, search}) => {

    var fistro = countriesFound

    const handleClick = (event) => {
    
      setCountry(fistro.filter(coun => coun.name === event.target.value))
    }

    const disp = () => {
      return (<div> 
        {fistro.map((cnt) => (
        <p key={getRandomString(5)}>{cnt.name}<button onClick={handleClick} value={cnt.name}> show </button></p>
        ))}
        </div>)
    }

    if (Array.isArray(fistro) && fistro.length > 10 && search !== 'https://restcountries.eu/rest/v2/name/') {
      return (<div key={getRandomString(5)}>Demasiados</div>)
    }

    if (Array.isArray(fistro) && fistro.length < 11 && search !== 'https://restcountries.eu/rest/v2/name/') {
      console.log("pepe")
      return (<div key={getRandomString(5)}>{disp()}</div>)
    }

    
   return <div >Busca</div>
   


}



export default App