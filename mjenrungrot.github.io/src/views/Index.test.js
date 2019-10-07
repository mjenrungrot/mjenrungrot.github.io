// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import Index from './Index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});
