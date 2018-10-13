import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "calc(100vh - 200px)",
    width: "80%",
    margin: "auto",
    backgroundColor: '#313131'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: 'black'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    color: 'black'
  },
  nameField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: 'black'
  },
  emailField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  messageField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "75%"
  },
  headerText: {
    width: '100%',
    margin: '12px auto',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    color: "black"
  }
});

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.flexContainer} elevation={2}>
        <Typography className={classes.headerText} variant="display2">Contact Form:</Typography>
        <Divider />
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          className={classes.nameField}
        />
        <TextField
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
          className={classes.emailField}
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          id="message"
          label="Message"
          value={this.state.message}
          onChange={this.handleChange("message")}
          margin="normal"
          multiline
          rowsMax="4"
          className={classes.messageField}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Contact);
