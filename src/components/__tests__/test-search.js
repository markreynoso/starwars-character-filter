import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../search.jsx';

describe ('Search component', () => {
  it ('input-box should render', () => {
    expect(shallow(<Search />).exists(<div className='input-box'></div>)).toBe(true)
  });
  it ('button should render', () => {
    expect(shallow(<Search />).exists(<div className='button'></div>)).toBe(true)
  });
  it ('renders props correctly', () => {
    const component = shallow(<Search searchName='none'/>)
    expect(component.instance().props.searchName).toBe('none')
  })
})
