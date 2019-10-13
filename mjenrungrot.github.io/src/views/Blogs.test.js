// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import Blogs from './Blogs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
        <Blogs />
      </MemoryRouter>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});
