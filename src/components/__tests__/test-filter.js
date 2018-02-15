import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Filter from '../gender_filter.jsx';

describe ('Filter component', () => {
  it ('should render three divs', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('div').length).toBe(3)
  });
  it ('should render one select', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('Select').length).toBe(1)
  });
  it ('should render one label', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('label').length).toBe(1)
  });
  it ('should render one p tag', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('p').length).toBe(1)
  });
  it ('renders label text correctly', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('label').text()).toEqual('GENDER')
  })
  it ('renders button text correctly', () => {
    const component = shallow(<Filter output={[{length: 1}]} results={[{gender: 'none', }]} />)
    expect(component.find('p').text()).toEqual('1 RESULT')
  })
})
