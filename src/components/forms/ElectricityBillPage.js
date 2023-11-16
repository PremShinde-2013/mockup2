// ElectricityBillPage.js
import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Slider,
  TextField,
  Alert,
  Snackbar,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/company logo.png";
import useElectricityBillStore from "../../store/ElectricityBillPageStore";
import { useTheme } from "@mui/material/styles";

const ElectricityBillPage = () => {
  const {
    sliderValue,
    sanctionedLoad,
    showAlert,
    showNumberError,
    isButtonDisabled,
    setSliderValue,
    setSanctionedLoad,
    setShowAlert,
    setShowNumberError,
    setIsButtonDisabled,
  } = useElectricityBillStore();
  const navigate = useNavigate();
  const theme = useTheme();

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
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  });
  useEffect(() => {
    // Update the button disabled state based on the form validity
    setIsButtonDisabled(!sanctionedLoad.trim());
  }, [sanctionedLoad, setIsButtonDisabled]);

  const handleButtonClick = () => {
    if (sanctionedLoad.trim() === "") {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setIsButtonDisabled(false); // Enable the button
      navigate("/get-rooftop-area");
    }
  };

  const handleSliderChange = (_, newValue) => {
    // Update the slider value in the store
    setSliderValue(newValue);
  };

  const handleSanctionedLoadChange = (event) => {
    const input = event.target.value;

    if (/^\d*\.?\d*$/.test(input)) {
      // Update the sanctioned load in the store
      setSanctionedLoad(input);
      setShowNumberError(false);
      setIsButtonDisabled(false); // Enable the button
    } else {
      setShowNumberError(true);
      setIsButtonDisabled(true); // Disable the button
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleNumberErrorClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowNumberError(false);
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
            fontSize: { xs: "18px", md: "30px" }, // Adjust font size based on screen size
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
                Next
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
