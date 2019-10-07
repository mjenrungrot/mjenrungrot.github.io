// @flow

import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Pages
import Index from "./views/Index";
import Works from "./views/Works";
import Publications from "./views/Publications";
import Projects from "./views/Projects";
import Blogs from "./views/Blogs";
import Experimental from "./views/Experimental";

// Material-UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#72cff8",
      main: "#4fc3f7",
      dark: "#3788ac"
    },
    secondary: {
      light: "#53c4f7",
      main: "#29b6f6",
      dark: "#1c7fac"
    }
  },
  typography: {
    subtitle1: {
      fontSize: 12,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 10
    }
  }
});

/**
 * Main App component
 */
class App extends React.Component {
  /**
   * componentDidMount
   */
  componentDidMount() {
    document.title = "Teerapat Jenrungrot";
  }

  /**
   * render
   * @return {Component} App Component.
   */
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/works" component={Works} />
            <Route path="/publications" component={Publications} />
            <Route path="/projects" component={Projects} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/experimental" component={Experimental} />
            <Route component={Index} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById("root"));
