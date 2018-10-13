import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  footer: {
    width: "100vw",
    height: "80px",
    backgroundColor: "orange"
  },
  grow: {
    flexGrow: 1
  }
};

const Footer = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <span className="rights">Site made by DivNectar</span>
            <div className={classes.grow} />
            <span className="rights">All rights reserved, ©Shaetree Vapes, LLC 2018</span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Footer);
