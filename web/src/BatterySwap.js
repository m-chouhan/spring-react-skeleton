import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  rowItems: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

class BatterySwap extends React.Component {
  state = {
    battery1Id: 0,
    battery2Id: 0
  };

  handleTextChange = () => {};
  render() {
    const { classes, onAccept } = this.props;
    return (
      <div className={classes.container}>
        <h1>Swap Batteries</h1>

        <FormControl style={{ marginTop: 40 }}>
          <InputLabel htmlFor="battery1">Enter Id for Battery 1</InputLabel>
          <Input
            id="battery1"
            value={this.state.battery1Id}
            onChange={this.handleTextChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="battery2">Enter Id for Battery 2</InputLabel>
          <Input
            id="battery2"
            value={this.state.battery2Id}
            onChange={this.handleTextChange}
          />
        </FormControl>
        <Button
          onClick={onAccept}
          style={{ marginTop: 40 }}
          color="primary"
          variant="raised"
        >
          Initiate Swap
        </Button>
      </div>
    );
  }
}

BatterySwap.propTypes = {
  classes: PropTypes.object.isRequired,
  onAccept: PropTypes.func.isRequired
};
export default withStyles(styles)(BatterySwap);
