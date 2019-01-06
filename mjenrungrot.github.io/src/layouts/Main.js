// @flow

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import BusinessIcon from "@material-ui/icons/Business";
import SchoolIcon from "@material-ui/icons/School";
import PublicIcon from "@material-ui/icons/Public";
import NotesIcon from "@material-ui/icons/Notes";
import BuildIcon from "@material-ui/icons/Build";

import Info from "../components/Template/Info";

const leftPanelWidth = 500;

const styles = theme => ({
  root: {
    display: "flex"
  },
  list: {
    margin: 0
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  canvas: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  leftPanel: {
    flexShrink: 0,
    width: leftPanelWidth,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down("sm")]: {
      width: 0,
      padding: 0,
      visibility: "hidden"
    }
  },
  toolbar: theme.mixins.toolbar
});

const drawerConfig = [
  {
    text: "Main",
    icon: <InboxIcon />,
    linkto: "/"
  },
  {
    text: "Work Experiences",
    icon: <BusinessIcon />,
    linkto: "/works"
  },
  {
    text: "Publications",
    icon: <SchoolIcon />,
    linkto: "/publications"
  },
  {
    text: "Projects",
    icon: <PublicIcon />,
    linkto: "/projects"
  },
  {
    text: "Blogs",
    icon: <NotesIcon />,
    linkto: "/blogs"
  },
  {
    text: "Experimental Section",
    icon: <BuildIcon />,
    linkto: "/experimental"
  }
];

/**
 * Main component
 */
class Main extends React.Component {
  /**
   * Constructor
   * @param {props} props Property
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  /**
   * toggleDrawer
   * @param {boolean} open Indicates if the drawer is opened.
   * @return {state} output state
   */
  toggleDrawer(open) {
    return () => {
      this.setState({
        ...this.state,
        isOpen: open
      });
    };
  }

  /**
   * render()
   * @return {object} Main component
   */
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {drawerConfig.map((tuple, _) => {
            return (
              <div key={tuple.text}>
                <Link to={tuple.linkto}>
                  <ListItem button key={tuple.text}>
                    <ListItemIcon>{tuple.icon}</ListItemIcon>
                    <ListItemText primary={tuple.text} />
                  </ListItem>
                </Link>
              </div>
            );
          })}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Personal Webpage
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.isOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <div className={classes.leftPanel}>
          <div className={classes.toolbar} />
          <Info />
        </div>
        <main className={classes.canvas}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

Main.defaultProps = {
  children: null
};

export default withStyles(styles)(Main);
