import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const FormPersoal = (props) => {
  const classes = useStyles();

  const handleNext = () => {
    if (
      props.values.occu === "" ||
      props.values.bio === "" ||
      props.values.city === ""
    ) {
      props.setErr();
    } else {
      props.nextStep();
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome ! Please Fill This Form Then When Youre Sure Click Submit
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Occupation"
            name="occu"
            defaultValue={props.values.occu}
            autoFocus
            onChange={props.handleChange()}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            defaultValue={props.values.city}
            onChange={props.handleChange()}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="bio"
            label="Biography"
            defaultValue={props.values.bio}
            onChange={props.handleChange()}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleNext}
          >
            Next Step
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            onClick={props.prevStep}
          >
            Back
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default FormPersoal;
