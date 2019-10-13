// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import Experimental from './Experimental';

describe('Experimental component', () => {
  test('renders', () => {
    const component = shallow(<Experimental />);
    expect(component).toMatchSnapshot();
  });
});
