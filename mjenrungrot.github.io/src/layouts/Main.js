// @flow

/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Info from "../components/Template/Info";

const leftPanelWidth = 500;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  canvas: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  leftPanel: {
    flexShrink: 0,
    width: leftPanelWidth,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Personal Webpage
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.leftPanel}>
          <div className={classes.toolbar} />
          <Info />
        </div>
        <main className={classes.canvas}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
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
