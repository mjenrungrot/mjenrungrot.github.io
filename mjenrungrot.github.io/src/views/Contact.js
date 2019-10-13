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
import Divider from '@material-ui/core/Divider';

import Main from '../layouts/Main';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  address: {
    marginLeft: theme.spacing(3),
  },
});

/**
 * Contact View Component
 * @param {object} props creation params
 * @return {object} Index component
 */
function Contact(props) {
  const {classes} = props;
  return (
    <Main selectedTab="/contact" infoBar showContact>
      <Fade in>
        <Paper className={classes.root}>
          <Typography variant="h5" gutterBottom>
            Contact
          </Typography>
          <Divider />
          <Typography variant="body1" paragraph>
            There are multiple ways to contact me.
          </Typography>
          <Typography paragraph>
            If you&apos;re reaching out for work opportunities, please
            reach out via LinkedIn message or my school email and
            simply indicate that you follow from my website.
          </Typography>
          <Typography paragraph>
            If you&apos;re interested in research collaboration, please
            reach out via school email. I&apos;m very open to research
            in many areas related to multimedia, AR/VR, deep learning,
            music information retrieval, computer vision, computational
            photography, and more.
          </Typography>
          <Typography paragraph>
            Lastly, if you need to mail or send relevant package,
            please refer to the following address.
          </Typography>
          <br />
          <Typography className={classes.address}>
            Teerapat Jenrungrot<br />
            Bill and Melinda Gates Center for Computer Science and
            Engineering<br />
            3800 E Stevens Way NE<br />
            Seattle, WA 98195
          </Typography>
        </Paper>
      </Fade>
    </Main>
  );
}

Contact.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Contact);
