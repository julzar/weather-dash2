import React, { useEffect, useContext } from 'react'
import Search from '../components/Search'
import Display from '../components/Display'
import { LocationContext } from '../utils/LocationContext'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'

export default function Main(){
  const [, setLocation] = useContext(LocationContext)
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      API.searchLocation(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`).then((res) => {
        setLocation(res)
      })
    })
  }, [])
  return (
    <div className='h-screen bg-gray-800'>
      <Jumbotron />
      <Search />
      <Display />
    </div>
  )
}