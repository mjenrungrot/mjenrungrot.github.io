// @flow

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'; // eslint-disable-line no-unused-vars
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Main from '../layouts/Main';
import data from '../data/works';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

const getItems = (props, current) =>
  data.map(function(item, i) {
    if (item.current === current) {
      return (
        <div key={item.position + item.workfor}>
          <Paper className={props.classes.root}>
            <div>
              <Typography
                variant="h6"
                style={{display: 'inline-block', width: '50%'}}
              >
                {item.position}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  display: 'inline-block',
                  width: '50%',
                  textAlign: 'right',
                }}
              >
                {item.current ?
                  `From ${item.fromDate}` :
                  `From ${item.fromDate} to ${item.toDate}`}
              </Typography>
            </div>
            <Typography variant="subtitle1">{item.workfor}</Typography>
            <Divider />
            <Typography variant="caption">{item.desc}</Typography>
          </Paper>
        </div>
      );
    } else {
      return null;
    }
  });

/**
 * Works View Component
 * @param {object} props creation params
 * @return {object} Works component
 */
function Works(props) {
  return (
    <Main>
      <Typography variant="h3" gutterBottom>
        Work Experiences
      </Typography>
      <Typography variant="h5" gutterBottom>
        Current
      </Typography>
      {getItems(props, true)}
      <Divider />
      <Typography variant="h5" gutterBottom>
        Past
      </Typography>
      {getItems(props, false)}
    </Main>
  );
}

Works.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Works);
