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
 * Works View Component
 * @param {object} props creation params
 * @return {object} Works component
 */
function Works(props) {
  console.log("Call works properly");
  const { classes } = props;
  return (
    <Main>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Works
        </Typography>
      </Paper>
    </Main>
  );
}

Works.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Works);
