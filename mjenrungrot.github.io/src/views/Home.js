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
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import Main from '../layouts/Main';
import newsData from '../data/news';
import './Home.css';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
            Welcome to my personal website. My name is Teerapat Jenrungrot.
          </Typography>
          <Typography component="p" gutterBottom>
            The source for this site is freely available at{' '}
            <a href="https://github.com/mjenrungrot/mjenrungrot.github.io">
              Here
            </a>
            .
          </Typography>
        </Paper>
      </Fade>
      <Fade in>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" gutterBottom>
            News
          </Typography>
          <List dense="true">
            {newsData.map((key) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <ListItem>
                  <ListItemIcon>
                    <AnnouncementIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.newsText}
                    primary={<Link to={key.link}>{key.caption}</Link>}
                    primaryTypographyProps={{style: {color: 'red'}}}
                    secondary={key.date} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Fade>
    </Main>
  );
}

Home.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Home);
