// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});