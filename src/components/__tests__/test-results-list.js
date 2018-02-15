import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ResultList from '../result_list.jsx';

describe ('ResultList component', () => {
  it ('single-char should render', () => {
    expect(shallow(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />).exists(<div className='single-char'></div>)).toBe(true)
  });
  it ('should render one p tag', () => {
    const component = shallow(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.find('p').length).toBe(1)
  });
  it ('renders props correctly', () => {
    const component = shallow(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.instance().props.name).toBe('jedi')
    expect(component.instance().props.gender).toBe('female')
    expect(component.instance().props.eyeColor).toBe('blue')
    expect(component.instance().props.hairColor).toBe('white')
  });
  it ('renders p tag text correctly', () => {
    const component = shallow(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.find('p').text()).toEqual('jedi')
  });
  it ('should render one ul', () => {
    const component = shallow(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.find('ul').length).toBe(1)
  });
  it ('should render three lis', () => {
    const component = mount(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.find('li').length).toBe(3)
  });
  it ('renders p tag text correctly', () => {
    const component = mount(<ResultList gender={'female'} hairColor={'white'} eyeColor={'blue'} name={'jedi'} />)
    expect(component.find('li').first().text()).toEqual('Female')
  });
})
