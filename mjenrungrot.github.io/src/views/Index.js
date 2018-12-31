// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Main from "../layouts/Main";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

/**
 * Index View Component
 * @param {object} props creation params
 * @return {object} Index component
 */
function Index(props) {
  const { classes } = props;
  return (
    <Main>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          About this site
        </Typography>
        <Typography component="p">
          A beatuful, responsive, react app written with ES2016, material-ui.
        </Typography>
        <Typography component="p">
          Welcome to my website. Please feel free to read more about me.
        </Typography>
        <Typography component="p">
          Source available at{" "}
          <a href="https://github.com/mjenrungrot/mjenrungrot.github.io">
            Here
          </a>
          .
        </Typography>
      </Paper>
    </Main>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
