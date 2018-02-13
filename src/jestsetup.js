const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-15');
// Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
