// @flow

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tab,
  Tabs,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import NotesIcon from '@material-ui/icons/Notes';
import BuildIcon from '@material-ui/icons/Build';

import Info from '../components/Template/Info';

const leftPanelWidth = 500;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  list: {
    margin: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  canvas: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  leftPanel: {
    flexShrink: 0,
    width: leftPanelWidth,
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      width: 0,
      padding: 0,
      visibility: 'hidden',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerLinkText: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const drawerConfig = [
  {
    text: 'Home',
    icon: <InboxIcon />,
    linkto: '/',
  },
  {
    text: 'About',
    icon: <BusinessIcon />,
    linkto: '/about',
  },
  {
    text: 'Research',
    icon: <SchoolIcon />,
    linkto: '/research',
  },
  {
    text: 'Blogs',
    icon: <NotesIcon />,
    linkto: '/blogs',
  },
  {
    text: 'Contact',
    icon: <PublicIcon />,
    linkto: '/contact',
  },
  {
    text: 'Experimental Section',
    icon: <BuildIcon />,
    linkto: '/experimental',
  },
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
      isOpen: false,
      selectedTab: props.selectedTab ? props.selectedTab : '/',
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
        isOpen: open,
      });
    };
  }

  /**
   * render()
   * @return {object} Main component
   */
  render() {
    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {drawerConfig.map((tuple, _) => {
            return (
              <div key={tuple.text}>
                <Link to={tuple.linkto}
                  className={classes.drawerLinkText}>
                  <ListItem button key={tuple.text}>
                    <ListItemIcon>{tuple.icon}</ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="subtitle1">
                          {tuple.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
              </div>
            );
          })}
        </List>
      </div>
    );

    // eslint-disable-next-line no-unused-vars
    const swipeableDrawer = (
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
    );

    const handleChangeTab = (event, newValue) => {
      this.setState({
        ...this.state,
        selectedTab: newValue,
      });
    };

    const header = (
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
          <Tabs
            onChange={handleChangeTab}
            value={this.state.selectedTab}
          >
            <Tab
              value={'/'}
              label="Home"
              component={Link}
              to={'/'}
            />
            <Tab
              value={'/about'}
              label="About"
              component={Link}
              to={'/about'}
            />
            <Tab
              value={'/research'}
              label="Research"
              component={Link}
              to={'/research'}
            />
            <Tab
              value={'/blogs'}
              label="Blogs"
              component={Link}
              to={'/blogs'}
            />
            <Tab value={'/contact'}
              label="Contact"
              component={Link}
              to={'/contact'}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    );

    const infoBar = (showContact) => {
      if (showContact) {
        return (
          <div className={classes.leftPanel}>
            <div className={classes.toolbar} />
            <Info showContact />
          </div>
        );
      } else {
        return (
          <div className={classes.leftPanel}>
            <div className={classes.toolbar} />
            <Info />
          </div>
        );
      }
    };

    const mainContent = (
      <main className={classes.canvas}>
        <div className={classes.toolbar} />
        {this.props.children}
      </main>
    );

    if (this.props.infoBar) {
      return (
        <div className={classes.root}>
          {header}
          {swipeableDrawer}
          {infoBar(this.props.showContact)}
          {mainContent}
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          {header}
          {swipeableDrawer}
          {mainContent}
        </div>
      );
    }
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  selectedTab: PropTypes.string.isRequired,
  infoBar: PropTypes.bool,
  showContact: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  infoBar: false,
};

export default withStyles(styles)(Main);
