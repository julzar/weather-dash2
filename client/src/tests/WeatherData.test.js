import React from 'react'
import renderer from 'react-test-renderer'
import WeatherData from '../components/WeatherData'

describe('the WeatherData component', () => {
  const component = renderer.create(
    <WeatherData uv={2} temp={75} hum={40} wind={12} loc={'Chicago'} icon={'01d'} />
  )

  const tree = component.toJSON()

  it ('should display the loc prop as text', () => {
    const { children } = tree.children[0].children[0]
    expect(children).toContain('Chicago')
  })
  
  it ('should display the temp prop as text', () => {
    const { children } = tree.children[1]
    expect(children).toContain('75')
  })

  it ('should display the hum prop as text', () => {
    const { children } = tree.children[2]
    expect(children).toContain('40')
  })

  it ('should display the wind prop as text', () => {
    const { children } = tree.children[3]
    expect(children).toContain('12')
  })

  it ('should display the uv prop as text', () => {
    const { children } = tree.children[4].children[1]
    expect(children).toContain('2')
  })

  it ('should have a className that includes "bg-green-400" on the span element', () => {
    const { className } = tree.children[4].children[1].props
    expect(className).toMatch('bg-green-400')
  })

  it ('should use the icon prop in the image source path', () => {
    const { src } = tree.children[0].children[1].props
    expect(src).toMatch('01d')
  })
})
