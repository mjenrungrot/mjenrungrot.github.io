// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
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
  Button,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';

// $FlowFixMe
import CV from "../../data/cv.pdf"; // eslint-disable-line

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  badges: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  linkText: {
    textDecoration: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  contactListItemText: {
    marginLeft: theme.spacing(1),
    color: '#1492ff',
    textDecoration: 'none',
  },
  cvButtonText: {
    color: '#1492ff',
    textDecoration: 'none',
  },
  resumeButtonText: {
    color: '#1492ff',
    textDecoration: 'none',
  },
});

const badges = [
  {
    icon: <FaLinkedin />,
    info: 'mjenrungrot',
    link: 'https://linkedin.com/in/mjenrungrot',
    type: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    info: 'mjenrungrot',
    link: 'https://github.com/mjenrungrot',
    type: 'GitHub',
  },
  {
    icon: <MdSchool />,
    info: 'tjenrung [at] cs.washington.edu',
    link: 'mailto:tjenrung [at] cs.washington.edu',
    type: 'E-mail (School)',
  },
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
      expanded: false,
    };
  }

  /**
   * handleExpandClick()
   */
  handleExpandClick() {
    this.setState((state, props) => ({
      expanded: !state.expanded,
    }));
  }

  /**
   * render
   * @return {object} info component
   */
  render() {
    const {classes, showContact} = this.props;
    const {expanded} = this.state;

    const contactPaper = (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact
        </Typography>
        <Divider />
        <List className={classes.badges}>
          {badges.map((badge) => (
            <div key={badge.type}>
              <a href={badge.link} className={classes.linkText}>
                <ListItem button>
                  <Avatar>{badge.icon}</Avatar>
                  <ListItemText
                    className={classes.contactListItemText}
                    secondary={badge.type}>
                    {badge.info}
                  </ListItemText>
                </ListItem>
              </a>
            </div>
          ))}
        </List>
      </Paper>
    );

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
                  [classes.expandOpen]: expanded,
                })}
                onClick={this.handleExpandClick.bind(this)}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
            title={(<div>Teerapat Jenrungrot</div>)}
            subheader={(
              <div>
                University of Washington, PhD in Computer Science (2019-) <br />
                Harvey Mudd College, BSc in Computer Science (2015-2019)
              </div>
            )}
          >
            <Typography>htehekohkes</Typography>
          </CardHeader>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Link to={CV} target="_self">
                  <Typography
                    variant="subtitle1"
                    className={classes.cvButtonText}
                  >
                      CV
                  </Typography>
                </Link>
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled
              >
                <Typography
                  variant="subtitle1"
                  className={classes.resumeButtonText}
                >
                  Resume
                </Typography>
              </Button>
            </CardContent>
          </Collapse>
        </Card>
        {showContact ? contactPaper : null}
      </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  showContact: PropTypes.bool,
};

export default withStyles(styles)(Info);
