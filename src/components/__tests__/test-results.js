import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Results from '../results.jsx';

describe ('Results component', () => {
  it ('single-char should render', () => {
    const component = shallow(<Results output={[{length: 1, key: 'jedi', name: 'jedi', gender: 'male', hairColor: 'black', eyeColor: 'green'}]} />)
    expect(component.exists(<div className='results-box'></div>)).toBe(true)
  });
  it ('should render four divs', () => {
    const component = shallow(<Results output={[{length: 1, key: 'jedi', name: 'jedi', gender: 'male', hairColor: 'black', eyeColor: 'green'}]} />)
    expect(component.find('div').length).toBe(4)
  });
  it ('renders props correctly', () => {
    const component = shallow(<Results output={[{length: 1, key: 'jedi', name: 'jedi', gender: 'male', hairColor: 'black', eyeColor: 'green'}]} />)
    expect(component.find('p').text()).toEqual('Search by character name')
  });
})
