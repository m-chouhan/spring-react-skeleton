import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QrReader from "./QrReader";
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
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

class BatterySwap extends React.Component {
  state = {
    batteryID1: "",
    batteryID2: "",
    selectedBattery: 1
  };

  onScan = value => {
    const { selectedBattery } = this.state;
    switch (selectedBattery) {
      case 1:
        this.setState({ batteryID1: value });
        break;
      case 2:
        this.setState({ batteryID2: value });
    }
  };
  handleTextChange = () => {};
  render() {
    const { classes, onAccept } = this.props;
    return (
      <div className={classes.container}>
        <h1>Swap Batteries</h1>
        <div className={classes.rowItems}>
          <div className={classes.container}>
            <TextField
              onFocus={() => this.setState({ selectedBattery: 1 })}
              id="battery1"
              label="Battery 1"
              value={this.state.batteryID1}
              margin="normal"
            />
            <TextField
              id="battery2"
              label="Battery 2"
              onFocus={() => this.setState({ selectedBattery: 2 })}
              value={this.state.batteryID2}
              margin="normal"
            />
          </div>
          <QrReader onScan={this.onScan} />
        </div>
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
