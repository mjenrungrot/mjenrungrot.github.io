// eslint-disable-next-line no-unused-vars
import React from 'react';
import {shallow} from 'enzyme';
import Blogs from './Blogs';

describe('Blogs component', () => {
  test('renders', () => {
    const component = shallow(<Blogs />);
    expect(component).toMatchSnapshot();
  });
});
