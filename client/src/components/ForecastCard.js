import React from 'react'

export default function ForecastCard({ date, icon, temp, hum, des}) {
  const path = `http://openweathermap.org/img/wn/${icon}.png`

  return (
    <div className='text-gray-300 text-lg tracking-wide leading-loose ring-gray-600 ring-2 p-6 rounded-xl mb-4'>
      <div className='border-b border-gray-600 mb-4'>
        <div className='space-x-2 flex '>
          <h2 className='font-semibold text-xl inline-block self-center'> {date.substring(5, 10)} </h2> 
          <img src={path} className='inline-block' />
        </div>
        <p className='capitalize mb-2'> {des} </p>
      </div>
      <p> Temp: {temp} °F </p>
      <p> Humidity: {hum}% </p>
    </div>
  )
}