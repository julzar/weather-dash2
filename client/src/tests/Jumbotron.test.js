import React from 'react'
import renderer from 'react-test-renderer'
import Jumbotron from '../components/Jumbotron'

describe('the Jumbotron component', () => {
  const component = renderer.create(
    <Jumbotron />,
  )
  const tree = component.toJSON().children[0]

  it ('should display the string WeatherDash', () => {    
    expect(tree.children).toContain(' WeatherDash ')
  })
  it ('should have type of h1', () => {
    expect(tree.type).toEqual('h1')
  })
  it ('should only have a className prop', () => {
    expect(Object.keys(tree.props)).toStrictEqual(['className'])
  })
})
