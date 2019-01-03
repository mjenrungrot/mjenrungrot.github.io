// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
  if (pdf !== null) {
    const pdfFile = require("../" + pdf);
    return (
      <Link to={pdfFile} target="_self">
        <Typography style={{ display: "inline-block" }}>[PDF]</Typography>
      </Link>
    );
  } else {
    return null;
  }
};

const processCode = code => {
  if (code !== null) {
    if (/^https?:\/\//.test(code)) {
      return (
        <a href={code} target="_self">
          <Typography style={{ display: "inline-block" }}>[Code]</Typography>
        </a>
      );
    } else {
      return (
        <Link to={code} target="_self">
          <Typography style={{ display: "inline-block" }}>[Code]</Typography>
        </Link>
      );
    }
  } else {
    return null;
  }
};

const processLink = link => {
  if (link !== null) {
    if (/^https?:\/\//.test(link)) {
      return (
        <a href={link} target="_self">
          <Typography style={{ display: "inline-block" }}>
            [Read More]
          </Typography>
        </a>
      );
    } else {
      return (
        <Link to={link} target="_self">
          <Typography style={{ display: "inline-block" }}>
            [Read More]
          </Typography>
        </Link>
      );
    }
  } else {
    return null;
  }
};

const getItems = props =>
  data.map(item => (
    <div key={item.title}>
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
            style={{
              display: "inline-block",
              width: "50%",
              textAlign: "right"
            }}
          >
            {item.date}
          </Typography>
        </div>
        <Typography variant="subtitle1">{item.authors.join(", ")}</Typography>
        <Typography variant="subtitle2">
          {processPublicationStatus(item.venue, item.status)}
        </Typography>
        <Divider />
        <Typography variant="caption">{item.desc}</Typography>
        {processPDF(item.pdf)}
        {processCode(item.code)}
        {processLink(item.link)}
      </Paper>
    </div>
  ));

/**
 * Publications View Component
 * @param {object} props creation params
 * @return {object} Publications component
 */
function Publications(props) {
  return (
    <Main>
      <Typography variant="h3" gutterBottom>
        Publications
      </Typography>
      {getItems(props)}
    </Main>
  );
}

Publications.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Publications);
