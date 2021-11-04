import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, getByRole, render, screen, act} from '@testing-library/react'
import Search from '../components/Search'
import { LocationProvider } from '../utils/LocationContext'
describe('the search component', () => {
  const component = renderer.create(
    <LocationProvider>
      <Search />
    </LocationProvider>   
  )
  
  const tree = component.toJSON()
  

  
  
  it('should call the handleSearch function on click', () => {
    // tree.children[1].props.onClick
    const myMock= jest.fn(e=>{console.log("clicked");return 7})
    // const myMock= e=>console.log("clicked")
    const {container, getByRole}= render(<LocationProvider>
      <Search mocked={myMock} />
    </LocationProvider>)
    console.log("this far?")
    const theButton = container.querySelector('button')
    act(() => {
      fireEvent(theButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    fireEvent(theButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    fireEvent(theButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    fireEvent(theButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    fireEvent(theButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    })
    console.log(myMock.mock)
    expect(myMock.mock.calls[0][0]).toBe('nick')
    // console.log(getByRole("button", {hidden: true}))
     expect(true).toBeTruthy()
  })
})
