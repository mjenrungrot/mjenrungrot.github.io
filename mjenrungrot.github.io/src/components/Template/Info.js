// @flow

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import {
  Paper,
  Divider,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Button
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdSchool, MdEmail, MdPhone } from "react-icons/md";

// $FlowFixMe
import CV from "../../data/cv.pdf"; // eslint-disable-line

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    marginBottom: theme.spacing.unit * 2
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  badges: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  linkText: {
    textDecoration: "none"
  },
  button: {
    margin: theme.spacing.unit
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
  },
  {
    icon: <MdPhone />,
    info: "+1-617-417-5653",
    link: null,
    type: "Phone"
  }
];

/**
 * Info Component
 * @param {object} props creation params
 * @return {object} Info component
 */
export class Info extends React.Component {
  /**
   *
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  /**
   * handleExpandClick()
   */
  handleExpandClick() {
    this.setState((state, props) => ({
      expanded: !state.expanded
    }));
  }

  /**
   * render
   * @return {object} info component
   */
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.cardAvatar}>
                TJ
              </Avatar>
            }
            action={
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={this.handleExpandClick.bind(this)}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
            title="Teerapat Jenrungrot"
            subheader="Harvey Mudd College, BSc in Computer Science (2019)"
          />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {/* <CardMedia /> */}
            <CardContent>
              <Typography component="p" gutterBottom>
                I'm a computer scientist who is passionate about deep learning
                particularly in the intersection of computer vision and audio
                signal processing.
              </Typography>
              <Typography component="p" gutterBottom>
                I did a lot of C/C++, Python, JavaScript, and LaTeX. I also knew
                SystemVerilog. During my free time, I explored Japanese language
                and competitive programming.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Typography variant="subtitle1">
                  <Link to={CV} target="_self">
                    CV
                  </Link>
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled
              >
                <Typography variant="subtitle1">Resume</Typography>
              </Button>
            </CardContent>
          </Collapse>
        </Card>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact
          </Typography>
          <Divider />
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
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
