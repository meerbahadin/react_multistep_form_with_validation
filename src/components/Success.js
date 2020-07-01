import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

const Success = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          You'r Data Successfully Submited You Will Send You The Istuctions Via {props.values.email}
        </Typography>
      </div>
    </Fragment>
  );
};

export default Success;
