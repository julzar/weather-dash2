// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../components/NotFound';

describe("the NotFound component", ()=>{
  it ("should display the prop as a message", ()=>{

    const component = renderer.create(
      <NotFound code={'404'} message={'not found'} />,
    );
    console.log(component.toJSON())
    expect(component.toJSON().children).toContain('404')
  })
})