import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shadetree.png";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {withRouter} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";

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
    width: "25vw",
    height: "auto",
    // margin: 'auto auto',
    padding: "10px 0px"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  bar: {
    width: '85%',
    margin: '0 auto'
  }
};

class Header extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  constructor(props) {
    super(props)

    this.goToHome = this.goToHome.bind(this)
    this.goToFlavors = this.goToFlavors.bind(this)
    this.goToContact = this.goToContact.bind(this)
  }

  goToHome() {
    this.props.history.push('/')
  }
  goToFlavors() {
    this.props.history.push('/flavors')
  }
  goToContact() {
    this.props.history.push('/contact')
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const navList = (
      <div className={classes.list}>
        <List>
          <ListItem onClick={this.goToHome} button>
            {/* <ListItemIcon>
              <InboxIcon />
            </ListItemIcon> */}
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
        {/* <List>{otherMailFolderListItems}</List> */}
      </div>
    );

    return (
      <>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.bar}>
              <IconButton
                onClick={this.toggleDrawer("left", true)}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <img alt="logo" src={logo} className={classes.logo} />
            </Toolbar>
          </AppBar>
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer("left", false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("left", false)}
              onKeyDown={this.toggleDrawer("left", false)}
            >
              {navList}
            </div>
          </Drawer>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Header));
