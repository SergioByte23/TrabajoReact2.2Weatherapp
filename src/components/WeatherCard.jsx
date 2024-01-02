import React, { useState } from 'react'
import './Styles/WeatherCard.css'
import axios from 'axios'


const WeatherCard = ({weather,temp}) => {
    const [isCelsius, setIsCelsius] = useState(true)    
    const handleChangeTemp =()=>{
        setIsCelsius(state =>!state)
    }
    console.log(weather);

    // if(weather?.weather[0].icon==='01d'){
    //     numeracion=1;
    // }
    // else if(weather?.weather[0].icon==='02d'){
    //     numeracion=2;
    // }
    // else if(weather?.weather[0].icon==='03d'){
    //     numeracion=3;
    // }
    // else if(weather?.weather[0].icon==='04d'){
    //     numeracion=4;
    // }
    // else if(weather?.weather[0].icon==='09d'){
    //     numeracion=5;
    // }
    // else if(weather?.weather[0].icon==='10d'){
    //     numeracion=6;
    // }
    // else if(weather?.weather[0].icon==='11d'){
    //     numeracion=7;
    // }
    // else if(weather?.weather[0].icon==='13d'){
    //     numeracion=8;
    // }
    // else if(weather?.weather[0].icon==='50d'){
    //     numeracion=9;
    // }


  return (
    <article className='weather'>
        <h1 className='weather__title'>Weather App</h1>
        <h2 className='weather__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
       
       
        <section className='weather__body'>
            <header className='weather__img'>
                {/* ponerle un corto circuito si weather existe me permite verlo, sino no muestra nada */}
                
                
                
                <img className='weather__icon' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </header>
            <article className='weather__info'>
                <h3 className='weather__info__title'>`{weather?.weather[0].description}`</h3>
                <ul className='weather__list'>
                    <li className='weather__item'><span className='weather__label'>Winf Speed</span><span className='weather__value'>{weather?.wind.speed} m/s</span></li>
                    <li className='weather__item'><span className='weather__label'>Clouds</span><span className='weather__value'>{weather?.clouds.all} %</span></li>
                    <li className='weather__item'><span className='weather__label'>Pressure</span><span className='weather__value'>{weather?.main.pressure} hPa</span></li>
                </ul>
            </article>
        </section>
        <footer className='weather__footer'>
            <h2 className='weather__temp'>{
            isCelsius
            ? `${temp?.celsius} °C`
            : `${temp?.fahrenheit} °F`}</h2>
            <button className='weather__btn' onClick={handleChangeTemp}>Change Temperture</button>
        </footer>
    </article>
  )
}

export default WeatherCard