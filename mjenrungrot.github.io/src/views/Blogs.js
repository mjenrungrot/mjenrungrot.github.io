// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

import Blog from '../components/Blog';
import Main from '../layouts/Main';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

/**
 * Blogs View Component
 * @param {object} props creation params
 * @return {object} Blogs component
 */
function Blogs(props) {
  return (
    <Main selectedTab="/blogs">
      <Blog />
    </Main>
  );
}

Blogs.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Blogs);
