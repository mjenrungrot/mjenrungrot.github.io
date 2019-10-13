// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import Contact from './Contact';

describe('Contact component', () => {
  test('renders', () => {
    const component = shallow(<Contact />);
    expect(component).toMatchSnapshot();
  });
});
