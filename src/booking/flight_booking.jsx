import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  filterContainer: {
    marginBottom: 25
  }
}));

const FlightBooking = () => {
  const bookingData = useSelector((state) => state.flightSearch.bookingDetails);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailValidator, setEmailValidator] = useState(false);
  const [mobileValidator, setMobileValidator] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  /**
   * @function handleFName
   * @param {object} e
   * @description get first name
   */
  const handleFName = (e) => {
    setFName(e.target.value);
  };

  /**
   * @function handleLName
   * @param {object} e
   * @description get Last name
   */
  const handleLName = (e) => {
    setLName(e.target.value);
  };

  /**
   * @function handleEmail
   * @param {object} e
   * @description get email id
   */
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputEmail.match(validEmailRegex) || inputEmail.length === 0) {
      setEmailValidator(false);
    } else {
      setEmailValidator(true);
    }

    //setEmailValidator(!inputEmail.match(validEmailRegex));
    setEmail(inputEmail);
  };

  /**
   * @function handleMobile
   * @param {object} e
   * @description get mobile number
   */
  const handleMobile = (e) => {
    const inputMobile = e.target.value;
    const validMobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (inputMobile.match(validMobileRegex) || inputMobile.length === 0) {
      setMobileValidator(false);
    } else {
      setMobileValidator(true);
    }
    //setMobileValidator(!inputMobile.match(validMobileRegex));
    setMobile(inputMobile);
  };

  /**
   * @function handleConfirm
   * @param {object} e
   * @description Confirm the booking
   */
  const handleConfirm = (e) => {
    if (
      fName.length !== 0 &&
      lName.length !== 0 &&
      email.length !== 0 &&
      !emailValidator &&
      mobile.length !== 0 &&
      !mobileValidator
    ) {
      setErrorFlag(false);
      history.push("/confirmation");
    } else {
      setErrorFlag(true);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.filterContainer}>
        <Typography variant="h6">{`Booking Confirmation for Flight ${bookingData?.result?.airlineName} (${bookingData?.result?.flightNbr})`}</Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.filterContainer}>
        <TextField
          required
          label="First Name"
          value={fName}
          onChange={handleFName}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.filterContainer}>
        <TextField
          required
          label="Last Name"
          value={lName}
          onChange={handleLName}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.filterContainer}>
        <TextField
          required
          error={emailValidator}
          label="Email ID"
          value={email}
          onChange={handleEmail}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.filterContainer}>
        <TextField
          required
          error={mobileValidator}
          label="Mobile Number"
          value={mobile}
          onChange={handleMobile}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.filterContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleConfirm(e)}
        >{`Confirm Booking`}</Button>
        {errorFlag && (
          <Typography color="error">{`All Fields are mandatory`}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

FlightBooking.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default FlightBooking;
