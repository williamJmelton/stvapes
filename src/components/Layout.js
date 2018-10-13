import React from "react";
import Paper from "@material-ui/core/Paper";

import Header from "./Header";
import Footer from "./Footer";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "90%",
    margin: "0 auto"
  }
});

const Layout = props => {
  const { classes } = props;
  return (
    <>
      <Header />
      <Paper className={classes.root} elevation={1}>
        {props.children}
      </Paper>
      <Footer />
    </>
  );
};

export default withStyles(styles)(Layout);
