// Contact.js
import React, { useEffect } from "react";
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
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/company logo.png";
import useContactStore from "../../store/useContactStore";

import { useTheme } from "@mui/material/styles";
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
  "&.Mui-disabled": {
    color: grey[300],
  },
});

const Contact = () => {
  const {
    phone,
    whatsapp,
    calls,
    emailChecked,
    email,
    error,
    isButtonDisabled,
    snackbarOpen,
    setPhone,
    setWhatsapp,
    setCalls,
    setEmailChecked,
    setEmail,
    setError,
    setIsButtonDisabled,
    setSnackbarOpen,
  } = useContactStore();
  const navigate = useNavigate();
  const theme = useTheme();

  const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderColor: theme.palette.primary.main,
    },
  });

  const StyledCheckbox = styled(Checkbox)({
    "&.Mui-checked": {
      color: theme.palette.primary.main,
    },
  });
  useEffect(() => {
    // Enable/disable the button based on the selection
    setIsButtonDisabled(
      !(
        phone &&
        (whatsapp || calls || (emailChecked && email && validateEmail(email)))
      )
    );
  }, [phone, whatsapp, calls, emailChecked, email, setIsButtonDisabled]);

  const handleButtonClick = () => {
    // Validate the phone number
    const isValidNumber = /^\d{10}$/.test(phone);
    if (!isValidNumber) {
      setError("Please enter a valid 10-digit phone number.");
      setSnackbarOpen(true);
      return;
    }

    // Validate that at least one option is selected
    if (!whatsapp && !calls && (!emailChecked || (emailChecked && !email))) {
      setError("Please select at least one option and provide a valid email.");
      setSnackbarOpen(true);
      return;
    }

    // Validate email if email option is selected
    if (emailChecked && !validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSnackbarOpen(true);
      return;
    }

    // Reset error state
    setError("");

    // Navigate to success page
    navigate("/success");
  };

  const handlephoneChange = (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    if (!/^\d{0,10}$/.test(inputValue)) {
      setError("Please enter numbers only.");
      setSnackbarOpen(true);
    } else {
      setError("");
      setSnackbarOpen(false);
    }
    // Enable/disable the button based on the selection
    setIsButtonDisabled(
      !(
        inputValue &&
        (whatsapp || calls || (emailChecked && email && validateEmail(email)))
      )
    );
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "whatsapp") {
      setWhatsapp(checked);
    } else if (name === "calls") {
      setCalls(checked);
    } else if (name === "email") {
      setEmailChecked(checked);
    }

    // Enable/disable the button based on the selection
    setIsButtonDisabled(
      !(
        phone &&
        (checked ||
          whatsapp ||
          calls ||
          (emailChecked && email && validateEmail(email)))
      )
    );
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (emailChecked && !validateEmail(inputValue)) {
      setError("Please enter a valid email address.");
      setSnackbarOpen(true);
    } else {
      setError("");
      setSnackbarOpen(false);
    }
    // Enable/disable the button based on the selection
    setIsButtonDisabled(
      !(
        phone &&
        (whatsapp ||
          calls ||
          (emailChecked && inputValue && validateEmail(inputValue)))
      )
    );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "row", md: "row" },
          gap: "5px",
          padding: "10px",
          boxShadow: "none",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={logo}
          alt='Logo'
          style={{ width: "100px", height: "auto", borderRadius: "50%" }}
        />
        <Typography
          variant='h5'
          sx={{
            color: "black",
            fontWeight: "bold",
            letterSpacing: "1px",

            textAlign: { xs: "left", md: "left" },
            fontSize: { xs: "18px", md: "30px" },
          }}
        >
          Easiest way to go solar!
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{
          height: { xs: "70vh", md: "80vh" },
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
        >
          <Grid item xs={12}>
            <Typography variant='h5'>To Contact You</Typography>
          </Grid>

          <Grid item xs={12}>
            <StyledTextField
              label='Contact Number'
              variant='outlined'
              color='success'
              fullWidth
              value={phone}
              onChange={handlephoneChange}
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
                    label='Only WhatsApp'
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
                    label='Only Calls'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={emailChecked}
                        onChange={handleCheckboxChange}
                        name='email'
                      />
                    }
                    label='Only email'
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            {emailChecked && (
              <StyledTextField
                label='Email'
                variant='outlined'
                color='success'
                fullWidth
                value={email}
                onChange={handleEmailChange}
                style={{ marginTop: "16px" }}
              />
            )}
          </Grid>

          <Grid item style={{ marginLeft: "auto", marginTop: "40px" }}>
            <StyledButton
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
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
              <Typography
                variant='h6'
                color='initial'
                sx={{
                  color: isButtonDisabled ? grey[600] : grey[900],
                }}
              >
                Complete
              </Typography>
              <ArrowForwardIosRoundedIcon
                sx={{
                  color: isButtonDisabled
                    ? grey[600]
                    : theme.palette.primary.main,
                  fontSize: 35,
                }}
              />
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>

      {/* Snackbar for displaying errors */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity='warning' onClose={handleSnackbarClose}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
