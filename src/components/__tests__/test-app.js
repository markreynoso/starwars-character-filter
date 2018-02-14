import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App.jsx';

describe('App component', () => {
  it ('wrapper should render', () => {
    expect(shallow(<App />).exists(<div className='wrapper'></div>)).toBe(true)
  });
  it ('state gender should be none', () => {
    const component = shallow(<App />);
    expect(component.state().gender).toBe('none')
  });
  it ('state output should be empty list', () => {
    const component = shallow(<App />);
    expect(component.state().output).toEqual([])
  });
  it ('state results should be empty list', () => {
    const component = shallow(<App />);
    expect(component.state().results).toEqual([])
  });
  it ('state searchName should be empty string', () => {
    const component = shallow(<App />);
    expect(component.state().searchName).toBe('')
  });
  it ('test mount', () => {
    const component = mount(<App />);
    console.log(component);
    // expect(component.state().searchName).toBe('')
  });
})
