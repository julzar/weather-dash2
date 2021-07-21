import React, { useContext } from 'react'
import { LocationContext } from '../utils/LocationContext'
import ForecastCard from './ForecastCard'
import NotFound from './NotFound'
import WeatherData from './WeatherData'

export default function Display() {
  const [location, ] = useContext(LocationContext)

  function renderWeather(data) {
    if (data.hasOwnProperty('message')) {
      return (
        <NotFound code={data.cod} message={data.message} />
      )
    } else if (data.hasOwnProperty('weather')) {
      const {temp, humidity, feels_like} = data.weather.main
      const { name } = data.weather
      const { speed } = data.weather.wind
      const { value, date } = data.uv
      const { icon, description } = data.weather.weather[0]
      const { country } = data.weather.sys
      const fiveDay = (arr, nth) => arr.filter((e, i) => i % nth === nth -1) // need to fix this to include index 0
      return (
        <div>
          <WeatherData temp={temp} feels={feels_like} hum={humidity} wind={speed} uv={value} loc={name} date={date} icon={icon} coun={country} des={description} />
          <div className='flex space-x-4' >
            {fiveDay(data.forecast, 8).map(day => {
              return (
                <ForecastCard key={day.dt} temp={day.main.temp} hum={day.main.humidity} icon={day.weather[0].icon} date={day.dt_txt} des={day.weather[0].description}/>
              )      
            })}
          </div>
        </div> 
      )
    }
  }

  return (
      <div className='flex justify-evenly'>
        {renderWeather(location)}
      </div>
  )
}