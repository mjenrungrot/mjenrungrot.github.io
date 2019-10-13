// @flow
/* eslint-disable max-len */

import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {
  CssBaseline,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Hidden,
  Divider,
} from '@material-ui/core';

import Markdown from './Template/Markdown';
import data from '../data/blogs';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
  },
  mainFeaturePostContent: {
    padding: `${theme.spacing(6)}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardGrid: {
    marginBottom: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing(3)}px 0`,
  },
});

const featuredPosts = [
  {
    title: 'React Site',
    date: 'January 5',
    description:
      'I created my personal site using React. This site will be used to keep updates on my works and other random stuffs.',
    link: null,
  },
  {
    title: 'Featured Post',
    date: 'January 5',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: null,
  },
];

const processMarkdowns = (data) => {
  return data.map((markdown) => {
    const file = require('../' + markdown.file);
    return {
      content: file,
      priority: markdown.priority,
    };
  });
};

/**
 * Blog component
 * @param {object} props
 * @return {object} Blog component
 */
function Blog(props) {
  const {classes} = props;
  const posts = processMarkdowns(data);
  console.log(posts);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post*/}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <div className={classes.mainFeaturePostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Blog
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Technical and random contents
                </Typography>
              </div>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={5} className={classes.cardGrid}>
            {featuredPosts.map((post) => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      {post.link ? (
                        <Link to={post.link}>
                          <Typography variant="subtitle1" color="primary">
                            Continue reading...
                          </Typography>
                        </Link>
                      ) : (
                        <Typography variant="subtitle1" color="primary" />
                      )}
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          {/* Main content */}
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Contents
            </Typography>
            <Divider />
            {posts.map((post) =>
              post.priority ? (
                <Markdown
                  className={classes.markdown}
                  key={post.content.substring(0, 40)}
                >
                  {post.content}
                </Markdown>
              ) : null
            )}
          </Grid>
          {/* End main content */}
        </main>
      </div>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
