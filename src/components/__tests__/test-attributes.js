import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Attributes from '../attributes.jsx';

describe ('Attributes component', () => {
  it ('should render li to page', () => {
    expect(shallow(<Attributes attr={'brown'}/>).exists(<li></li>)).toBe(true)
  });
  it ('should render only one li', () => {
    const component = shallow(<Attributes attr={'brown'}/>)
    expect(component.find('li').length).toBe(1)
  });
  it ('renders li text correctly', () => {
    const component = shallow(<Attributes attr={'brown'}/>)
    expect(component.find('li').text()).toEqual('brown')
  });
})
