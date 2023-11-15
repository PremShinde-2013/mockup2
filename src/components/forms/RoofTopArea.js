import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";
import { Navigate, useNavigate } from "react-router-dom";

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

// Set the border color to green for TextField
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderColor: green[500],
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

const RoofTopArea = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [roofTopArea, setRoofTopArea] = useState("");
  const [showNumberError, setShowNumberError] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    if (roofTopArea.trim() === "") {
      setShowNumberError(false);
      setShowEmptyError(true);
    } else if (!/^\d+$/.test(roofTopArea)) {
      setShowEmptyError(false);
      setShowNumberError(true);
    } else {
      setShowEmptyError(false);
      setShowNumberError(false);
      setSelectedOption("Next");
      // Add logic to navigate to the next page if needed
      // Use useNavigate to navigate to /get-name
      navigate("/get-name");
    }
  };

  const handleRoofTopAreaChange = (event) => {
    const input = event.target.value;

    // Validate input to allow only numbers
    if (/^\d*$/.test(input)) {
      setRoofTopArea(input);
      setShowNumberError(false);
    } else {
      // Display error if input contains non-numeric characters
      setShowNumberError(true);
    }
  };

  return (
    <Container>
      <Typography variant='h3' style={{ marginBottom: "20px" }}>
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
            <Typography variant='h6'>Available Rooftop Area</Typography>
          </Grid>

          <Grid item xs={12}>
            {/* Use StyledTextField instead of TextField */}
            <GreenBorderTextField
              label='Shadow Free Area (sq.ft)'
              variant='outlined'
              color='success'
              fullWidth
              value={roofTopArea}
              onChange={handleRoofTopAreaChange}
            />
          </Grid>

          <Grid item style={{ marginLeft: "auto", marginTop: "40px" }}>
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

      {/* Material UI Alert for Number Error */}
      <Snackbar
        open={showNumberError}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setShowNumberError(false)}
      >
        <Alert
          severity='error'
          variant='filled'
          onClose={() => setShowNumberError(false)}
        >
          Please enter a valid number.
        </Alert>
      </Snackbar>

      {/* Material UI Alert for Empty Error */}
      <Snackbar
        open={showEmptyError}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setShowEmptyError(false)}
      >
        <Alert
          severity='warning'
          variant='filled'
          onClose={() => setShowEmptyError(false)}
        >
          Please fill in the Rooftop Area field.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RoofTopArea;
