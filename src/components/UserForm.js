import React, { useState } from "react";
import FormUserDetail from "./FormUserDetail";
import FormPersonal from "./FormPersoal";
import Confirm from "./Confrm";
import Success from './Success';
import Container from "@material-ui/core/Container";
import { Alert } from '@material-ui/lab';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occu: "",
    city: "",
    bio: "",
  });

  //next step function
  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  //go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };
  
  //Handle field change

  const handleChange = (input) => (e) => {
    //   { ...formData, [e.target.name]: e.target.value }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleError = () => {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
  }

  const { firstName, lastName, email, occu, city, bio } = formData;
  const values = { firstName, lastName, email, occu, city, bio };


  switch (step) {
    case 1:
      return (
        <Container component="main" maxWidth="sm">
        {error && <Alert severity="error">Please Enter All Fields</Alert>}
          <FormUserDetail
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            setErr={toggleError}
          />
        </Container>
      );

    case 2:
      return (
        <Container component="main" maxWidth="sm">
        {error && <Alert severity="error">Please Enter All Fields</Alert>}
        <FormPersonal
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          setErr={toggleError}
        />
        </Container>
      );
    case 3:
      return (
        <Container component="main" maxWidth="sm">
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          handleSubmit={handleSubmit}
        />
        </Container>
      );
    case 4:
      return (
        <Container component="main" maxWidth="sm">
        <Success
          values={values}
        />
        </Container>
      )
  }
};

export default UserForm;
