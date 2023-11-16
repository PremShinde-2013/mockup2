// GetName.js
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
import useNameStore from "../../store/useNameStore";
import { useTheme } from "@mui/material/styles";

const GetName = () => {
  const {
    name,
    showLetterError,
    showEmptyError,
    isButtonDisabled,
    setName,
    setShowLetterError,
    setShowEmptyError,
    setIsButtonDisabled,
  } = useNameStore();
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
    setIsButtonDisabled(!/^[a-zA-Z]+$/.test(name) || showEmptyError);
  }, [name, showEmptyError, setIsButtonDisabled]);

  const handleButtonClick = () => {
    if (/^[a-zA-Z]+$/.test(name)) {
      setShowLetterError(false);
      setShowEmptyError(false);
      setIsButtonDisabled(false);
      navigate("/get-contact");
    } else if (name.trim() === "") {
      setShowEmptyError(true);
      setShowLetterError(false);
      setIsButtonDisabled(true);
    } else {
      setShowLetterError(true);
      setShowEmptyError(false);
      setIsButtonDisabled(true);
    }
  };

  const handleNameChange = (event) => {
    const input = event.target.value;

    if (/^[a-zA-Z]*$/.test(input)) {
      setName(input);
      setShowLetterError(false);
      setShowEmptyError(false);
      setIsButtonDisabled(false);
    } else if (input.trim() === "") {
      setShowEmptyError(true);
      setShowLetterError(false);
      setIsButtonDisabled(true);
    } else {
      setShowLetterError(true);
      setShowEmptyError(false);
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
        style={{ height: "60vh", flexDirection: "column" }}
      >
        <Grid
          container
          spacing={2}
          style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
        >
          <Grid item xs={12}>
            <Typography variant='h6'>Almost Done</Typography>
          </Grid>

          <Grid item xs={12}>
            <GreenBorderTextField
              label='Enter your name'
              variant='outlined'
              color='success'
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{
                borderColor:
                  showLetterError || showEmptyError
                    ? green[700]
                    : theme.palette.primary.main,
              }}
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

      {/* Material UI Alert for Letter Error */}
      <Snackbar
        open={showLetterError}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setShowLetterError(false)}
      >
        <Alert
          severity='warning'
          variant='filled'
          onClose={() => setShowLetterError(false)}
        >
          Please enter only letters.
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
          Please fill in the Name field.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default GetName;
