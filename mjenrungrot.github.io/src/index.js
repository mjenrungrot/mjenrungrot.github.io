import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";

// Pages
import Index from "./views/Index";

import * as serviceWorker from "./serviceWorker";

// CSS
require("./static/css/main.scss");

document.title = "Personal Webpage -- Teerapat Jenrungrot";
document.body.style.margin = "0";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
