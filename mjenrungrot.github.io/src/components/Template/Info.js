// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Paper,
  Divider,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdSchool, MdEmail } from "react-icons/md";

// $FlowFixMe
import CV from "../../data/cv.pdf";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  badges: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  linkText: {
    textDecoration: "none"
  }
});

const badges = [
  {
    icon: <FaLinkedin />,
    info: "mjenrungrot",
    link: "https://linkedin.com/in/mjenrungrot",
    type: "LinkedIn"
  },
  {
    icon: <FaGithub />,
    info: "mjenrungrot",
    link: "https://github.com/mjenrungrot",
    type: "GitHub"
  },
  {
    icon: <MdSchool />,
    info: "mjenrungrot[at]hmc.edu",
    link: "mailto:mjenrungrot[at]hmc.edu",
    type: "E-mail (School)"
  },
  {
    icon: <MdEmail />,
    info: "mek.1803[at]gmail.com",
    link: "mailto:mek.1803[at]gmail.com",
    type: "E-mail (Personal)"
  }
];

/**
 * Info Component
 * @param {object} props creation params
 * @return {object} Info component
 */
function Info(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom>
          About
        </Typography>
        <Divider />
        <Typography component="p" gutterBottom>
          Hello, I'm Teerapat Jenrungrot, a senior at Harvey Mudd College.
        </Typography>
        <Typography component="p" gutterBottom>
          To view my current CV, take a look at{" "}
          <Link to={CV} target="_self">
            here
          </Link>
        </Typography>
        <List className={classes.badges}>
          {badges.map(badge => (
            <div key={badge.type}>
              <a href={badge.link} className={classes.linkText}>
                <ListItem button>
                  <Avatar>{badge.icon}</Avatar>
                  <ListItemText secondary={badge.type}>
                    {badge.info}
                  </ListItemText>
                </ListItem>
              </a>
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
