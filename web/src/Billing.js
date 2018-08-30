import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  tripDetails: {
    display: "flex",
    width: "50%",
    flexDirection: "column"
  }
});

class Billing extends React.Component {
  state = {
    name: ""
  };

  handleTextChange = event => {
    console.log("name");
    this.setState({ name: event.target.value });
  };

  fetchDetails = () => {
    console.log("Fetching details from server");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.tripDetails}>
          <FormControl>
            <InputLabel htmlFor="name-simple">Start Trip</InputLabel>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleTextChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="name-simple">Stop Trip</InputLabel>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleTextChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="name-simple">Total</InputLabel>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleTextChange}
            />
          </FormControl>
        </div>
      </div>
    );
  }
}

Billing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Billing);
