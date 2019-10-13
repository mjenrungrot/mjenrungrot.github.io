// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import Main from '../layouts/Main';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paperFade: {
    in: true,
  },
});

/**
 * Home View Component
 * @param {object} props creation params
 * @return {object} Home component
 */
function Home(props) {
  const {classes} = props;
  return (
    <Main selectedTab="/">
      <Fade in>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" gutterBottom>
            About this site
          </Typography>
          <Typography component="p" gutterBottom>
            Welcome to my personal website.
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

Home.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Home);
