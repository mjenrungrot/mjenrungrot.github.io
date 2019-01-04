// @flow

import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Main from "../layouts/Main";
import data from "../data/projects";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

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
  data.map(function(item, i) {
    return (
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
              variant="subtitle2"
              style={{
                display: "inline-block",
                width: "50%",
                textAlign: "right"
              }}
            >
              {item.current
                ? `From ${item.fromDate}`
                : `From ${item.fromDate} to ${item.toDate}`}
            </Typography>
          </div>
          <Typography variant="subtitle2">{item.subtitle}</Typography>
          <Divider />
          <Typography variant="caption">{item.desc}</Typography>
          {processPDF(item.pdf)}
          {processLink(item.link)}
        </Paper>
      </div>
    );
  });

/**
 * Projects View Component
 * @param {object} props creation params
 * @return {object} Projects component
 */
function Projects(props) {
  return (
    <Main>
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      {getItems(props)}
    </Main>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
