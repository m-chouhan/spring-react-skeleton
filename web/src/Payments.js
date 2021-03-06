import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import rupee from "./static/rupee.jpg";

const styles = theme => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  paymentsInfo: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    justifyContent: "center"
  },
  card: {
    width: 600
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 24
  },
  image: {
    width: 600,
    height: 300
  }
});

class Payments extends React.Component {
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
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/India_new_500_INR%2C_MG_series%2C_2016%2C_obverse.jpg/800px-India_new_500_INR%2C_MG_series%2C_2016%2C_obverse.jpg"
              className={classes.image}
              title="profile pic"
            />
            <CardContent>
              <Typography
                classes={classes.title}
                gutterBottom
                variant="headline"
                component="h2"
              >
                Total : 400 Rs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <FormControl style={{ width: "50%", margin: 25 }}>
          <InputLabel htmlFor="name-simple">Enter Amount</InputLabel>
          <Input
            id="name-simple"
            value={this.state.carNo}
            onChange={this.handleTextChange}
          />
        </FormControl>
        <Button size="large">Pay Now</Button>
      </div>
    );
  }
}

Payments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Payments);
