// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Main from "../layouts/Main";
import data from "../data/publications";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

const processPublicationStatus = (venue, status) => {
  if (venue !== null) {
    return status + " to " + venue;
  } else {
    return status;
  }
};

const processPDF = pdf => {
  return <div />;
};

const processCode = code => {
  return <div />;
};

const getItems = props =>
  data.map(item => (
    <Paper className={props.classes.root}>
      <div>
        <Typography
          variant="h6"
          style={{ display: "inline-block", width: "50%" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          style={{ display: "inline-block", width: "50%", textAlign: "right" }}
        >
          {item.date}
        </Typography>
      </div>
      <Typography variant="subtitle1">{item.authors.join(", ")}</Typography>
      <Typography variant="subtitle2" gutterBottomr>
        {processPublicationStatus(item.venue, item.status)}
      </Typography>
      <Typography variant="caption">{item.desc}</Typography>
      {processPDF(item.pdf)}
      {processCode(item.code)}
    </Paper>
  ));

/**
 * Publications View Component
 * @param {object} props creation params
 * @return {object} Publications component
 */
function Publications(props) {
  const { classes } = props;
  return (
    <Main>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Publications
        </Typography>
      </Paper>
      {getItems(props)}
    </Main>
  );
}

Publications.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Publications);
