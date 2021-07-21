import React from 'react'

export default function NotFound({ code, message }) {
  return (
    <p className='text-gray-300 text-3xl font-thin ring-gray-600 ring-4 rounded-xl p-12 '> {code}: {message} </p>
  )
}