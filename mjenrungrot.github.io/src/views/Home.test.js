// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('Home component', () => {
  test('renders', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
