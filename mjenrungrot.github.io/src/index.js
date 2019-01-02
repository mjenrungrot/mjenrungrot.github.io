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

document.title = "Teerapat Jenrungrot";
document.body.style.margin = "0";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
