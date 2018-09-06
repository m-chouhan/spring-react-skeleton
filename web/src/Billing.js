import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import Switch from "@material-ui/core/Switch";

import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-car.css";
import ReactSpeedometer from "react-d3-speedometer";

import BillingTable from "./BillingTable";

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
  },
  rowItems: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

class Billing extends React.Component {
  state = {
    currentReading: 0,
    previousReading: 0,
    battery_1: 0,
    battery_2: 0,
    totalKms: 100,
    rate: 11,
    showBill: false,
    checked: false
  };

  componentDidMount() {
    this.setState({
      previousReading: 990,
      battery_1: 20,
      battery_2: 90
    });
  }
  handleTextChange = event => {
    this.setState({ currentReading: event.target.value });
  };

  fetchBill = () => {
    console.log("Fetching details from server");
    const { currentReading, previousReading } = this.state;
    this.setState({ totalKms: currentReading - previousReading });
    //this.setState({ showBill: true });
  };

  render() {
    const { classes, onAccept } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.rowItems}>
          <ReactSpeedometer
            height={200}
            width={200}
            minValue={10}
            value={this.state.battery_1}
            maxValue={150}
            needleTransitionDuration={9000}
            needleTransition="easeElastic"
            currentValueText={"Battery level " + this.state.battery_1}
          />
        </div>
        <div className={classes.tripDetails}>
          <FormControl>
            <InputLabel htmlFor="name-simple">Enter Current Reading</InputLabel>
            <Input
              id="name-simple"
              value={this.state.currentReading}
              onChange={this.handleTextChange}
            />
          </FormControl>
          <Button
            onClick={this.fetchBill}
            style={{ margin: 10 }}
            variant="raised"
            color="primary"
          >
            Generate Bill
          </Button>
        </div>
        <Switch
          checked={this.state.checked}
          onChange={() => this.setState({ checked: !this.state.checked })}
          aria-label="Collapse"
        />
        <Zoom
          in={this.state.checked}
          style={{ transitionDelay: this.state.checked ? 500 : 0 }}
        >
          <BillingTable
            onAccept={onAccept}
            currentReading={this.state.currentReading}
            previousReading={this.state.previousReading}
            totalKms={this.state.totalKms}
            rate={this.state.rate}
          />
        </Zoom>
      </div>
    );
  }
}

Billing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Billing);
