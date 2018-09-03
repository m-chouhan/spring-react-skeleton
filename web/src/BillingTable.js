import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "50%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

function SimpleTable(props) {
  const { classes, onAccept } = props;

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Total Kms</TableCell>
            <TableCell numeric>100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Leasing Rate</TableCell>
            <TableCell numeric>10 rs/km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell numeric>1000 rs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button
                onClick={onAccept}
                style={{ width: "100%" }}
                variant="raised"
                color="primary"
              >
                Accept
              </Button>
            </TableCell>
            <TableCell>
              <Button
                style={{ width: "100%" }}
                variant="raised"
                color="secondry"
              >
                Reject
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
