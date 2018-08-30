import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { isEmpty } from "lodash";

const mediaCardStyle = {
  card: {
    width: 400
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
    width: 400,
    height: 400
  },
  pos: {
    marginBottom: 12
  }
};

function MediaCard(props) {
  const { details, classes, onAccept } = props;
  if (isEmpty(details)) return <CircularProgress />;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          image={details.image}
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
            Driver Name : Akul
          </Typography>
          <Typography component="p">car no : {details.carNo}</Typography>
          <Typography component="p">address : {details.address}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={onAccept} size="small" color="primary">
          Accept
        </Button>
        <Button size="small" color="primary">
          Reject
        </Button>
      </CardActions>
    </Card>
  );
}

const MediaCardStyled = withStyles(mediaCardStyle)(MediaCard);

const styles = theme => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  fetchDetailsView: {
    display: "flex",
    width: "50%",
    flexDirection: "column"
  }
});

class DriverDetails extends React.Component {
  state = {
    carNo: "",
    driverDetails: {}
  };

  handleTextChange = event => {
    this.setState({ carNo: event.target.value });
  };

  fetchDetails = () => {
    console.log("Fetching details from server");
    this.setState({
      driverDetails: {
        image: "https://images.indianexpress.com/2017/12/party-driver.jpg",
        carNo: this.state.carNo,
        address:
          "7th Cross Rd, 3rd Block, Koramangala 1A Block," +
          "Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034"
      }
    });
  };

  render() {
    const { classes, onAccept } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.fetchDetailsView}>
          <FormControl>
            <InputLabel htmlFor="name-simple">
              Enter Car Registeration No
            </InputLabel>
            <Input
              id="name-simple"
              value={this.state.carNo}
              onChange={this.handleTextChange}
            />
          </FormControl>

          <Button
            onClick={this.fetchDetails}
            style={{ margin: 10 }}
            variant="raised"
            color="primary"
          >
            Fetch details
          </Button>
        </div>
        <MediaCardStyled
          details={this.state.driverDetails}
          onAccept={onAccept}
        />
      </div>
    );
  }
}

DriverDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DriverDetails);
