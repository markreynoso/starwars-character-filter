import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App.jsx';

describe('App component', () => {
  it ('wrapper should render', () => {
    expect(shallow(<App />).exists(<div className='wrapper'></div>)).toBe(true)
  });
})
