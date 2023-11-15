import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Slider,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const StyledButton = styled(Button)({
  color: "black",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid green",
  },
  "&.Mui-selected": {
    backgroundColor: "green",
    color: "white",
    border: "1px solid green",
  },
});

const GreenBorderTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: green[500],
    },
    "&:hover fieldset": {
      borderColor: green[700],
    },
  },
});

const ElectricityBillPage = () => {
  const [sliderValue, setSliderValue] = useState(4000);
  const [sanctionedLoad, setSanctionedLoad] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false); // Added state for number validation
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    if (sanctionedLoad.trim() === "") {
      // Display alert if TextField is empty
      setShowAlert(true);
    } else {
      setShowAlert(false);
      // Use useNavigate to navigate to /solar-roof-finder
      // navigate("/solar-roof-finder");
      // navigate("/get-name");
      navigate("/get-rooftop-area");
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSanctionedLoadChange = (event) => {
    const input = event.target.value;

    // Validate input to allow only numbers and a decimal point
    if (/^\d*\.?\d*$/.test(input)) {
      setSanctionedLoad(input);
      setShowNumberError(false);
    } else {
      // Display error if input contains non-numeric characters or multiple decimal points
      setShowNumberError(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleNumberErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowNumberError(false);
  };

  return (
    <Container>
      <Typography
        variant='h3'
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Easiest way to go solar!
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        style={{ height: "60vh", flexDirection: "column" }}
      >
        <Grid
          container
          spacing={2}
          style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
        >
          <Grid item xs={12}>
            <Typography variant='h6'>
              Electricity bill in Last Month:
              <span style={{ fontWeight: "bold" }}> {sliderValue}</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider
              value={sliderValue}
              max={10000}
              min={0}
              aria-label='Default'
              valueLabelDisplay='on'
              onChange={handleSliderChange}
              sx={{ color: "green", fontWeight: "bold" }}
            />
          </Grid>
          <Grid item xs={12}>
            <GreenBorderTextField
              label='Sanctioned Load (in KW)'
              margin='normal'
              color='success'
              value={sanctionedLoad}
              onChange={handleSanctionedLoadChange}
            />
          </Grid>
          <Grid item style={{ marginLeft: "auto", marginTop: "20px" }}>
            <StyledButton
              onClick={handleButtonClick}
              sx={{
                width: "100px",
                height: "80px",
                alignSelf: "flex-end",
                border: "none",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                },
              }}
            >
              <Typography variant='h6' color='initial'>
                Next
              </Typography>
              <ArrowForwardIosRoundedIcon
                sx={{ color: green[500], fontSize: 35 }}
              />
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>

      {/* Material UI Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity='warning' variant='filled' onClose={handleAlertClose}>
          Please fill in the Sanctioned Load field.
        </Alert>
      </Snackbar>

      {/* Number error Snackbar */}
      <Snackbar
        open={showNumberError}
        autoHideDuration={3000}
        onClose={handleNumberErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity='error'
          variant='filled'
          onClose={handleNumberErrorClose}
        >
          Please Enter Only Numbers.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ElectricityBillPage;
