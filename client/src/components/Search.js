import React , {useState, useContext} from 'react'
import API from '../utils/API'
import { LocationContext } from '../utils/LocationContext'
import search_icon from '../assets/search_icon.svg' 

export default function Search() {
  const [, setLocation] = useContext(LocationContext)
  const [search, setSearch] = useState('')

  function handleChange(e) {
    e.preventDefault()
    const { value } = e.target
    setSearch(value.trim())
  }

  // called when the 'enter' key is pushed or the search button is clicked
  function handleSearch(e) {
    if (e.key === 'Enter' || e.type === 'click') {
      API.searchLocation(`q=${search}`).then((res) => {
        setLocation(res)
      })
    }
  }

  return (
    <div className='flex justify-center mb-4'>
      <input onChange={handleChange} onKeyDown={handleSearch} placeholder='Location'
        className='m-2 bg-gray-400 bg-opacity-50 pl-2 outline-none rounded-xl ring-2 ring-gray-600 hover:bg-gray-200 focus:bg-gray-200' />
      <button onClick={handleSearch} > <img src={search_icon} alt={'search icon'} /> </button>
    </div>
  )
}