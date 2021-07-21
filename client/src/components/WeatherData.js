import React, { useEffect, useState } from 'react'
const moment = require('moment')

export default function WeatherData ({ temp, feels, hum, wind, uv, date, loc, icon, coun, des}) {
  // function setColor(uv) {
  //   switch(true) {
  //     case uv < 3:
  //       return 'bg-green-400'
  //     case uv < 6:
  //       return 'bg-yellow-300'
  //     case uv < 8:
  //       return 'bg-yellow-500'
  //     case uv < 11:
  //       return 'bg-red-500'
  //     default:
  //       return 'bg-purple-500'
  //   }
  // }
  const [ color, setColor ] = useState('')
  useEffect(() => {
    colorState(uv)
  })

  function colorState(val) {
    switch(true) {
      case val < 3:
        setColor('bg-green-400')
      break;
      case val < 6:
        setColor('bg-yellow-300')
      break;
      case val < 8:
        setColor('bg-yellow-500')
      break;
      case val < 11:
        setColor('bg-red-500')
      break;
      case val >= 11:
        setColor('bg-purple-500')
      break;    
    }
  }

  // const formatted = moment(date).format('dddd, Do, h:mm A')
  const path = `http://openweathermap.org/img/wn/${icon}.png`
  return (
    <div className='text-gray-300 text-xl tracking-wide leading-loose ring-gray-600 ring-2 p-8 rounded-xl mb-4'>
      <div className='space-x-2 flex border-b border-gray-600 mb-4'>
        <h2 className='font-semibold text-2xl inline-block self-center capitalize'> {loc}, {coun} — {des} </h2> 
        <img src={path} alt='weather icon' className='inline-block' />
      </div>
      
      <p> Temperature: {temp} °F {/*{temp != feels ? `, but feels like ${feels}°F` : ''}*/} </p>
      <p> Humidity: {hum}% </p>
      <p> Wind Speed: {wind} mph </p>
      <p> UVI: <span className={`${color} rounded bg-opacity-75 px-1 text-black font-semibold`}> {uv} </span> </p>
    </div>
  )
}