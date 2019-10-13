// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import About from './About';

describe('About component', () => {
  test('renders', () => {
    const component = shallow(<About />);
    expect(component).toMatchSnapshot();
  });
});
