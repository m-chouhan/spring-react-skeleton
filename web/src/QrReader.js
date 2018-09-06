import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QrReaderComponent extends Component {
  state = {
    delay: 300,
    result: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
      this.props.onScan(data);
    }
  };
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div style={{ width: "30%" }}>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QrReaderComponent;
