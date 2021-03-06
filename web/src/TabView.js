import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Billing from "./Billing";
import DriverDetails from "./DriverDetails";
import Payments from "./Payments";
import BatterySwap from "./BatterySwap";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    width: "90%",
    margin: 40
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    console.log(index);
    this.setState({ value: index });
  };

  gotoNextState = () => {
    const current = this.state.value;
    this.setState({ value: current + 1 });
  };

  handleText = () => {};
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="1. Driver Details" />
            <Tab label="2. Bill Estimate" />
            <Tab label="3. Swap Batteries" />
            <Tab label="4. Payments" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <DriverDetails onAccept={this.gotoNextState} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Billing onAccept={this.gotoNextState} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <BatterySwap onAccept={this.gotoNextState} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Payments />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
