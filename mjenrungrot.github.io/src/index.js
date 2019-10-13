// @flow

import React from "react"; //eslint-disable-line
import ReactDOM from 'react-dom';
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'typeface-roboto';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

// Pages
import Home from './views/Home';
import About from './views/About';
import Research from './views/Research';
import Blogs from './views/Blogs';
import Contact from './views/Contact';
import Experimental from './views/Experimental';

// Material-UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
    },
    secondary: {
      light: '#ffbcaf',
      main: '#ff8a80',
      dark: '#c85a54',
    },
  },
  typography: {
    color: 'black',
    fontFamily: '"Source Sans Pro", sans-serif',
    useNextVariant: true,
    subtitle1: {
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 10,
    },
  },
  overrides: {
    MuiButton: {
      color: 'black',
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#1492ff',
      },
    },
  },
});

/**
 * Main App component
 */
class App extends React.Component {
  /**
   * componentDidMount
   */
  componentDidMount() {
    document.title = 'Teerapat Jenrungrot';
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
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/research" component={Research} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/contact" component={Contact} />
            <Route path="/experimental" component={Experimental} />
            <Route component={Home} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));
