
import { useEffect, useRef } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import ChargingScreenn from './components/ChargingScreenn'

function App() {

const [coords, setCoords] = useState()
const [weather, setWeather] = useState()
const [temp, setTemp] = useState()
const [isLoading, setIsLoading] = useState(true)
const [inputValue, setInputValue] = useState()

// const [photoRandom, setPhotoRandom] = useState('carga')
const [photoRandom, setPhotoRandom] = useState(1)
const success = pos =>{
  const obj ={
    lat:pos.coords.latitude,
    lon: pos.coords.longitude
  }
  setCoords(obj)
}

useEffect(()=>{
  setIsLoading(true)
  // peticion asincrona
  navigator.geolocation.getCurrentPosition(success)
},[])
useEffect(()=>{
  if(coords){
    const APY_KEY='c4ae548cb563d87244ebc374a02dfa91'
    const {lat,lon}= coords
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}`
    axios.get(url)
    .then(res=> {
      setWeather(res.data)
      
      const obj = {
        celsius:(res.data.main.temp-273.15).toFixed(1),
        fahrenheit:((res.data.main.temp-273.15) * 9 / 5 + 32).toFixed(1)
      }
      setTemp(obj)            
      })
    .catch(err => console.log(err))
    .finally(()=> setIsLoading(false))
  }


  
},[coords])

useEffect(() => {

  if (inputValue) {
    const APIKEY2 = 'c4ae548cb563d87244ebc374a02dfa91'
    // const url2= `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${APIKEY2}`
    const url2=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKEY2}`
    axios.get(url2)
      .then(ress => {
        setWeather(ress.data)
        
        const obj = {
          celsius:(ress.data.main.temp-273.15).toFixed(1),
          fahrenheit:((ress.data.main.temp-273.15) * 9 / 5 + 32).toFixed(1)
        }
        setTemp(obj) 
      })

      .catch(err => console.log(err))
      .finally(() => {console.log('holii');})
  }
}, [inputValue])


const inputCountry = useRef()

const handleSubmit = e => {
  e.preventDefault()
  setInputValue(inputCountry.current.value.trim())
}

useEffect(() => {
  if(weather?.weather[0].icon.includes('01d')) {
    setPhotoRandom(1)
  }
  else if(weather?.weather[0].icon.includes('01n')){
    setPhotoRandom('1_1')
  } 
  else if(weather?.weather[0].icon.includes('02d')){
    setPhotoRandom(2)
  }
  else if(weather?.weather[0].icon.includes('02n')){
    setPhotoRandom('2_2')
  }
  else if(weather?.weather[0].icon.includes('03d') || weather?.weather[0].icon.includes('04d')){
    setPhotoRandom(3)
  } 
  else if(weather?.weather[0].icon.includes('03n') || weather?.weather[0].icon.includes('04n')){
    setPhotoRandom('3_3')
  } 
  else if(weather?.weather[0].icon.includes('09d') || weather?.weather[0].icon.includes('10d')){
    setPhotoRandom(9)
  } 
  else if(weather?.weather[0].icon.includes('09n') || weather?.weather[0].icon.includes('10n')){
    setPhotoRandom('9_9')
  } 
  else if(weather?.weather[0].icon.includes('11')){
    setPhotoRandom(4)
  }
  else if(weather?.weather[0].icon.includes('13d')){
    setPhotoRandom(8)
  }
  else if(weather?.weather[0].icon.includes('50')){
    setPhotoRandom(5)
  }
}, [weather])

const objStyle={
  backgroundImage: `url(../fondo${photoRandom}.jpg)`
}



return (
    <>
      <div>
        {
          isLoading 
          ?<div className='app app--loading'> <ChargingScreenn /></div>
          : (        
            <>
            <div className='app' style={objStyle} >
            <form className='app__button__formm' onSubmit={handleSubmit}>
              <input className='app__input' type="text" ref={inputCountry} placeholder="Ingresar Ciudad..."  />
              <button className='app__btn'>Search</button>
            </form>
            <div >

              <WeatherCard
              weather={weather}
              temp={temp}
              />
            </div>
            </div>
            </> )
      }
      </div>
     
    </>
  )
}

export default App
