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

const GetName = () => {
  const [name, setName] = useState("");
  const [showLetterError, setShowLetterError] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    if (/^[a-zA-Z]+$/.test(name)) {
      // Only letters are allowed
      setShowLetterError(false);
      setShowEmptyError(false);

      // Add logic to navigate to the next page if needed
      // Use useNavigate to navigate to the next page (e.g., /next-page)
      navigate("/get-contact");
    } else if (name.trim() === "") {
      // Empty input error
      setShowEmptyError(true);
      setShowLetterError(false);
    } else {
      // Display error if input contains non-letter characters
      setShowLetterError(true);
      setShowEmptyError(false);
    }
  };

  const handleNameChange = (event) => {
    const input = event.target.value;

    // Validate input to allow only letters
    if (/^[a-zA-Z]*$/.test(input)) {
      setName(input);
      setShowLetterError(false);
      setShowEmptyError(false);
    } else if (input.trim() === "") {
      // Empty input error
      setShowEmptyError(true);
      setShowLetterError(false);
    } else {
      // Display error if input contains non-letter characters
      setShowLetterError(true);
      setShowEmptyError(false);
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
            <Typography variant='h6'>Almost Done</Typography>
          </Grid>

          <Grid item xs={12}>
            {/* Use StyledTextField instead of TextField */}
            <GreenBorderTextField
              label='Enter your name'
              variant='outlined'
              color='success'
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{
                borderColor:
                  showLetterError || showEmptyError ? green[700] : green[500],
              }}
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
          Please Fill In The Name Field.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default GetName;
