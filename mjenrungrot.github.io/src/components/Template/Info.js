// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Paper, Divider, Typography } from "@material-ui/core";

// $FlowFixMe
import CV from "../../data/cv.pdf";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

/**
 * Info Component
 * @param {object} props creation params
 * @return {object} Info component
 */
function Info(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom>
          About
        </Typography>
        <Divider />
        <Typography component="p" gutterBottom>
          Hello, I'm Teerapat Jenrungrot, a senior at Harvey Mudd College.
        </Typography>
        <Typography component="p" gutterBottom>
          To view my current CV, take a look at{" "}
          <Link to={CV} target="_self">
            here
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
