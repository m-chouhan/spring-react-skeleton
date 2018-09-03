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
    name: "",
    odometerValue: 0,
    battery_1: 0,
    battery_2: 0,
    showBill: true,
    checked: false
  };

  componentDidMount() {
    this.setState({
      odometerValue: 9999,
      battery_1: 20,
      battery_2: 90
    });
  }
  handleTextChange = event => {
    console.log("name");
    this.setState({ name: event.target.value });
  };

  fetchDetails = () => {
    console.log("Fetching details from server");
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
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            currentValueText={"Battery 1 :: " + this.state.battery_1}
          />
          <ReactSpeedometer
            height={200}
            width={200}
            minValue={10}
            value={this.state.battery_2}
            maxValue={150}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            currentValueText={"Battery 2 ::" + this.state.battery_2}
          />
        </div>
        <div
          className={classes.rowItems}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <InputLabel htmlFor="name-simple">Last Odometer Reading</InputLabel>
          <Odometer
            style={{ margin: 20 }}
            width={200}
            format="d"
            duration={2000}
            value={this.state.odometerValue}
          />
        </div>
        <div className={classes.tripDetails}>
          <FormControl>
            <InputLabel htmlFor="name-simple">Enter Current Reading</InputLabel>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleTextChange}
            />
          </FormControl>
          <Button
            onClick={this.fetchDetails}
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
          <BillingTable onAccept={onAccept} />
        </Zoom>
      </div>
    );
  }
}

Billing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Billing);
