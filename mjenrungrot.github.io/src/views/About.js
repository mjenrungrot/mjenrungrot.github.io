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
import './About.css';

const styles = (theme) => ({
  'root': {
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
      <Fade in>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" gutterBottom>
            About myself
          </Typography>
          <main id="mainContent">
            <Typography paragraph>
              Teerapat is a Ph.D. student in Computer Science & Engineering
              at <a href="https://www.cs.washington.edu/">Paul G. Allen School of Computer Science & Engineering, University of Washington</a>.
              Currently, Teerapat is working with
              Prof. <a href="https://homes.cs.washington.edu/~kemelmi/">Ira Kemelmacher-Shlizerman</a> and
              Prof. <a href="https://homes.cs.washington.edu/~seitz/">Steve Seitz</a> on topics related to the intersection of audio
              (especially spatial audio), computer vision, and learning.
              Teerapat is affiliated with
              the <a href="https://realitylab.uw.edu/">UW Reality Lab</a> and
              the <a href="https://grail.cs.washington.edu/">UW Graphics and Imaging Laboratory (GRAIL)</a>.
              Prior to joining University of Washington, Teerapat worked as an
              applied scientist for Amazon.com, Inc. on developing a deep
              learning method for learning a representation of customer
              behavior data to address heteorogeneous impacts.
            </Typography>
            <Typography paragraph>
              Teerapat completed his BS degree in Computer Science
              (Sep 2015 - May 2019) from <a href='https://www.hmc.edu'>Harvey Mudd College</a>
              where he worked on various projects in computer science,
              engineering, and mathematics. During his time at Harvey
              Mudd, Teerapat worked under
              Prof. <a href="http://pages.hmc.edu/ttsai/">Timothy Tsai</a> (Music Information Retrieval),
              Prof. <a href="https://www.hmc.edu/mathematics/people/faculty/weiqing-gu/">Weiqing Gu</a> (Spatial audio modeling in collaboration with Intel Corporation),
              Prof. <a href="https://www.cs.hmc.edu/~dodds/">Zachary Dodds</a> (Computer Vision),
              Prof. <a href="https://www.cs.hmc.edu/~montanez/">George Montanez</a> (Theoretical Machine Learning),
              Prof. <a href="http://pages.hmc.edu/harris/">David Money Harris</a> (PCB Developer), and
              Prof. <a href="https://www.cs.hmc.edu/~julie/">Julie Medero</a> (Gaze behavior analysis in collaboration with Microsoft Corporation).
            </Typography>
            <Typography paragraph>
              Teerapat&apos;s research interests are in the domain of
              audio, music, and computer vision, for instance,
              audio-visual representation, deep learning,
              music information retrieval, AR/VR, computer
              vision, and computer graphics. The overarching
              question is how we can leverage visual features
              to make auditory experience more immersive or
              audio features to make visual experience more
              immersive.
            </Typography>
            <Typography paragraph>
              Teerapat&apos;s personal interests are about
              cooking, traveling, photographing, gaming,
              learning languages, watching series, and
              reading light novels. Currently, he knows
              Thai, English, Japanese, and Korean. In his
              free time, he loves to cook new recipes and
              thinking about cool ideas to work on. He is
              also interested in applied ethics on areas
              related to CS technology.
            </Typography>
          </main>
        </Paper>
      </Fade>
    </Main>
  );
}

About.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(About);
