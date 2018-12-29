import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

// Pages
import Index from './views/Index';

import * as serviceWorker from './serviceWorker';

document.body.style.margin = "0";
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
