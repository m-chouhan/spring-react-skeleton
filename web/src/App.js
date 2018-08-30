import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TabView from "./TabView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Battery Station Ui
            </Typography>
          </Toolbar>
        </AppBar>
        <TabView />
      </div>
    );
  }
}

export default App;
