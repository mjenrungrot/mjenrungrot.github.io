// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
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
 * About View Component
 * @param {object} props creation params
 * @return {object} Index component
 */
function About(props) {
  const {classes} = props;
  return (
    <Main selectedTab="/about" infoBar>
      <Fade in="true">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" gutterBottom>
            About this site
          </Typography>
          <Typography component="p" gutterBottom>
            Hello to my personal website.
          </Typography>
          <Typography component="p" gutterBottom>
            Source available at{' '}
            <a href="https://github.com/mjenrungrot/mjenrungrot.github.io">
              Here
            </a>
            .
          </Typography>
        </Paper>
      </Fade>
    </Main>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
