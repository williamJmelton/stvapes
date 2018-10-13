import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import logo from '../assets/shadetree.png';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    width: '25vw',
    height: 'auto',
    // margin: 'auto auto',
    padding: '10px 0px'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  bar: {
    width: '85%',
    margin: '0 auto'
  }
};

class Header extends Component {
  state = {
    left: false
  };

  constructor(props) {
    super(props);

    this.goToHome = this.goToHome.bind(this);
    this.goToFlavors = this.goToFlavors.bind(this);
    this.goToContact = this.goToContact.bind(this);
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  goToHome() {
    const { history } = this.props;
    history.push('/');
  }

  goToFlavors() {
    const { history } = this.props;
    history.push('/flavors');
  }

  goToContact() {
    const { history } = this.props;
    history.push('/contact');
  }

  render() {
    const { classes } = this.props;
    const { left } = this.state;

    const navList = (
      <div className={classes.list}>
        <List>
          <ListItem onClick={this.goToHome} button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem onClick={this.goToFlavors} button>
            <ListItemText primary="Flavors" />
          </ListItem>
          <Divider />
          <ListItem onClick={this.goToContact} button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.bar}>
              <IconButton
                onClick={this.toggleDrawer('left', true)}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <img alt="logo" src={logo} className={classes.logo} />
            </Toolbar>
          </AppBar>
          <Drawer open={left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {navList}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired
};

export default withRouter(withStyles(styles)(Header));
