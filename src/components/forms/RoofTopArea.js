// RoofTopArea.js
import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/company logo.png";
import useRoofTopAreaStore from "../../store/useRoofTopAreaStore";
import { useTheme } from "@mui/material/styles";

const RoofTopArea = () => {
  const {
    roofTopArea,
    showNumberError,
    showEmptyError,
    isButtonDisabled,
    setRoofTopArea,
    setShowNumberError,
    setShowEmptyError,
    setIsButtonDisabled,
  } = useRoofTopAreaStore();
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
      backgroundColor: theme.palette.primary.main,
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
    setIsButtonDisabled(!roofTopArea.trim() || showNumberError);
  }, [roofTopArea, showNumberError, setIsButtonDisabled]);

  const handleButtonClick = () => {
    if (roofTopArea.trim() === "") {
      setShowEmptyError(true);
    } else if (!/^\d+(\.\d+)?$/.test(roofTopArea)) {
      setShowEmptyError(false);
      setShowNumberError(true);
    } else {
      setShowEmptyError(false);
      setShowNumberError(false);
      setIsButtonDisabled(false);
      navigate("/get-name");
    }
  };

  const handleRoofTopAreaChange = (event) => {
    const input = event.target.value;

    // Validate input to allow numbers and decimal point
    if (/^\d*(\.\d*)?$/.test(input)) {
      // Update the rooftop area in the store
      setRoofTopArea(input);
      setShowNumberError(false);
      setIsButtonDisabled(false);
    } else {
      setShowNumberError(true);
      setIsButtonDisabled(true);
    }
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
        style={{ height: "50vh", flexDirection: "column" }}
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
