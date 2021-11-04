const axios = require('axios')

const baseURL = 'https://api.openweathermap.org/data/2.5/'
const units = '&units=imperial'
const key = 'da43e57b5117e805c210e2b7768d7d30'

const API = {
  // performs 3 asynchronous axios calls. gets weather data and forecast data for a location, then uses the coordinates from the first response to get the uv index for that location
  searchLocation: async function(search) {
    let res
    let uv
    let forecast
    let data
    try {
      //current weather data
      res = await axios.get(`${baseURL}weather?${search + units}&appid=${key}`)
      console.log(res.data)
      forecast = await axios.get(`${baseURL}forecast?${search + units}&appid=${key}`)
      console.log(forecast.data.list)
      try {
        //uv index data
        uv = await axios.get(`${baseURL}uvi?&appid=${key + units}&lat=${res.data.coord.lat}&lon=${res.data.coord.lon}`)
        console.log(uv.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    catch (error) {
      console.log(error)
      return error.response.data
    }
    data = {
        weather: res.data,
        forecast: forecast.data.list,
        uv: uv.data
    }
    return data
  },
}

export default API