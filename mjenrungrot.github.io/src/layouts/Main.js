import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton, Button, Grid, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Main extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Personal Webpage
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
            
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
            
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);