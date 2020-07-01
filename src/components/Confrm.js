import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Confirm = (props) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    props.handleSubmit();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Are You Sure About Submiting These Data ?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={values.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={values.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={values.occu} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={values.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Biography" secondary={values.bio} />
          </ListItem>
        </List>
      </div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={continueToNextStep}
      >
        Next Step
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="default"
        onClick={back}
      >
        Back
      </Button>
    </Fragment>
  );
};

export default Confirm;
