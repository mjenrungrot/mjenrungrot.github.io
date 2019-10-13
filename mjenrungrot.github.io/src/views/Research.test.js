// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import Research from './Research';

describe('Research component', () => {
  test('renders', () => {
    const component = shallow(<Research />);
    expect(component).toMatchSnapshot();
  });
});
