import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// Custom styled component for the button
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

// Set the color of the checkmark to green
const StyledCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: green[500],
  },
});

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [calls, setCalls] = useState(false);
  const [useEmail, setUseEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleButtonClick = () => {
    // Validate the phone number and email if email is selected
    const isValidNumber = /^\d{10}$/.test(phoneNumber);
    const isValidEmail = !useEmail || /^\S+@\S+\.\S+$/.test(email);

    if (!isValidNumber) {
      setError("Please enter a valid 10-digit phone number.");
      setSnackbarOpen(true);
      return;
    }

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      setSnackbarOpen(true);
      return;
    }

    // Reset error state
    setError("");

    // Proceed with the button click logic
    setSelectedOption("Next");

    // If all fields are filled, navigate to "/success"
    if (phoneNumber) {
      navigate("/success");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "whatsapp") {
      setWhatsapp(checked);
    } else if (name === "calls") {
      setCalls(checked);
    } else if (name === "useEmail") {
      setUseEmail(checked);
    }
  };

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
            <Typography variant='h5'>To reach you</Typography>
          </Grid>

          <Grid item xs={12}>
            <GreenBorderTextField
              label='Contact Number'
              variant='outlined'
              color='success'
              fullWidth
              value={phoneNumber}
              onChange={(e) => {
                const inputValue = e.target.value;
                setPhoneNumber(inputValue);
                if (!/^\d{0,10}$/.test(inputValue)) {
                  setError("Please enter a valid 10-digit phone number.");
                  setSnackbarOpen(true);
                } else {
                  setError("");
                }
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component='fieldset'>
              <Grid container spacing={2} style={{ textAlign: "justify" }}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={whatsapp}
                        onChange={handleCheckboxChange}
                        name='whatsapp'
                      />
                    }
                    label=' WhatsApp'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={calls}
                        onChange={handleCheckboxChange}
                        name='calls'
                      />
                    }
                    label=' Call'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={useEmail}
                        onChange={handleCheckboxChange}
                        name='useEmail'
                      />
                    }
                    label='Email'
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          {useEmail && (
            <Grid item xs={12}>
              <GreenBorderTextField
                label='Email Address'
                variant='outlined'
                color='success'
                fullWidth
                value={email}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setEmail(inputValue);
                  if (!/^\S+@\S+\.\S+$/.test(inputValue)) {
                    setError("Please enter a valid email address.");
                    setSnackbarOpen(true);
                  } else {
                    setError("");
                  }
                }}
                style={{ marginTop: "16px" }}
              />
            </Grid>
          )}

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
                Complete
              </Typography>
              <ArrowForwardIosRoundedIcon
                sx={{ color: green[500], fontSize: 35 }}
              />
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity='warning'
          variant='filled'
          onClose={handleSnackbarClose}
        >
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
