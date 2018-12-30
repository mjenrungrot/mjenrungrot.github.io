// @flow

/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Info from "../components/Template/Info";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="wrapper">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Personal Webpage
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div id="main">{this.props.children}</div>
        <Info />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

Main.defaultProps = {
  children: null
};

export default withStyles(styles)(Main);
