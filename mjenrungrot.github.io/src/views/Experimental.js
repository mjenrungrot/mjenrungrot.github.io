// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Main from '../layouts/Main';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

/**
 * Experimental View Component
 * @param {object} props creation params
 * @return {object} Experimental component
 */
function Experimental(props) {
  const {classes} = props;
  return (
    <Main>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" gutterBottom>
          Experimental
        </Typography>
        <Typography component="p" gutterBottom>
          This component is an experimental section. It&apos;s used for
          developing purposes only.
        </Typography>
      </Paper>
    </Main>
  );
}

Experimental.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Experimental);
