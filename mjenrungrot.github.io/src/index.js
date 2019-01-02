// @flow

import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Pages
import Index from "./views/Index";

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
    useNextVariants: true
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
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
