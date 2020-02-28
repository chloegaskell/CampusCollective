import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import logo from '../Logo/logo.jpeg';
import { withStyles } from '@material-ui/core/styles';
import {NavLink, Link} from "react-router-dom";


const lightColor = 'rgba(255, 255, 255, 0.7)';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});





function Header(props) {
  const { classes, onDrawerToggle } = props;
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }


  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Typography className={classes.link} component="a" href="#" fontStyle="italic">
              ~ Spend Less, Learn More ~
              </Typography>
            </Grid>

            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
              <Typography variant="h6" gutterBottom>
                Luca
              </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={0}>
            <Grid item>
            <Typography variant="h2">
              Text Trade
            </Typography>
            </Grid>
            <Grid item>

            <img src= {logo} width="90" height="75"/>
            </Grid>
            </Grid>

            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small" component={Link} to="/Login">
                Logout
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit" component={Link} to="/Help">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="inherit">
          <Tab textColor="inherit" label="Current Transactions" />
          <Tab textColor="inherit" label="Wish List"  />
          <Tab textColor="inherit" label="My Books" />
          <Tab textColor="inherit" label="My Lists" />
          <Tab textColor="inherit" label="User Info" />
        </Tabs>

      </AppBar>

    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
