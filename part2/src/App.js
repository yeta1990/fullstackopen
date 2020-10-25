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
    
    
  }

  return (
    <div>    Busca un país: <input onChange={handleSearchChange} />
                    <br />
        <Countries countriesFound={countriesFound} country={country} setCountry={setCountry} search={search}/>
    
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
    <div key={getRandomString(5)} >
    <h1 key={getRandomString(5)}>{cnt.name}</h1>
    <span key={getRandomString(5)}>Capital: {cnt.capital}</span> <br />
    <span key={getRandomString(5)}>Population: {cnt.population}</span>
    <h2>languages</h2>
    <ul key={getRandomString(5)}>
      {cnt.languages.map(lan => <li key={getRandomString(5)}> {lan.name}</li>)}
     
    </ul>
    <img src={cnt.flag} width="300px" alt="flag"/>
    <br />
    <p key={getRandomString(5)}>
      <Weather capital={cnt.capital} key={getRandomString(5)}/>
      </p>
    </div>
    ))}
    </div>)

}

const Weather = ({capital}) => {

  const [w, setW] = useState(false)
  const [weatherdata, setWeatherData] = useState({})

 
  let urltofetchWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=' + process.env.REACT_APP_WEATHER_API

  useEffect(() => {axios.get(urltofetchWeather).then(res=> {setWeatherData(res.data)
    setW(true)
  })}, [w, urltofetchWeather]);

  
  

  if (!w) {
    return <></>
  }
  return (<><strong>El tiempo en {capital}</strong>
  <img src={"http://openweathermap.org/img/wn/" + weatherdata.weather[0].icon + "@2x.png"} alt='' />
  {Math.round(weatherdata.main.temp - 273.15)} ºC
  <br/>
  <span key={getRandomString(5)}>Overview: {weatherdata.weather[0].main} - {weatherdata.weather[0].description}</span></>)
  

}

const ListOfCountries = ({countriesFound, setCountry, search}) => {

    var fistro = countriesFound

    const handleClick = (event) => {
    
      setCountry(fistro.filter(coun => coun.name === event.target.value))
    }

    const disp = () => {
      return (<div key={getRandomString(5)}> 
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