import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import cookie from "react-cookie";
import { isEmpty } from "lodash";
import TabView from "./TabView";
import "./App.css";

const LoginButton = () => (
  <Button
    size="large"
    color="primary"
    onClick={() => {
      window.location =
        "http://stage-olacare-auth-bridge.corp.olacabs.com/auth?app_name=ev-station&return_page=http://evstation.olacabs.com:8080&auth_config_id=40001";
    }}
  >
    Please Click here to Login
  </Button>
);

const LogoutButton = () => (
  <Button
    bsStyle="warning"
    bsSize="large"
    onClick={() => {
      window.location =
        "http://stage-olacare-auth-bridge.corp.olacabs.com/auth?app_name=ev-station&return_page=http://evstation.olacabs.com:8080&auth_config_id=40001";
    }}
  >
    Logout
  </Button>
);

class App extends Component {
  state = { sessionId: null };
  componentWillMount = () => {
    const token = cookie.load("_sessionId");
    this.setState({ sessionId: "token" });
  };

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
        {isEmpty(this.state.sessionId) ? <LoginButton /> : <TabView />}
      </div>
    );
  }
}

export default App;
