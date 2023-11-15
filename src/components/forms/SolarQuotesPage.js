import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Custom styled component for the buttons
const StyledButton = styled(Button)({
  color: "black",
  border: "1px solid green",
  "&:hover": {
    color: "black",
    border: "1px solid green",
  },
  "&.Mui-selected": {
    color: "black",
    border: "2px solid green",
  },
});

const SolarQuotesPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      // If an option is selected, navigate to /electricity-bill
      navigate("/electricity-bill");
    } else {
      // If no option is selected, show Snackbar
      setShowSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Container>
      <h1>Easiest way to go solar!</h1>
      <Typography variant='h5' style={{ marginBottom: "10px" }}>
        Requesting quotes for
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent='flex-start' // Align to the left
        alignItems='center'
        style={{ height: "60vh", flexDirection: "column" }}
      >
        {["Home", "Business", "Non Profit"].map((option, index) => (
          <Grid item key={index}>
            <StyledButton
              variant='outlined'
              onClick={() => handleButtonClick(option)}
              className={selectedOption === option ? "Mui-selected" : ""}
              sx={{ width: { xs: "250px", md: "400px" }, height: "50px" }}
            >
              {option}
            </StyledButton>
          </Grid>
        ))}
        <Grid item style={{ marginLeft: "340px", marginTop: "40px" }}>
          <StyledButton
            onClick={handleNextButtonClick}
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

      {/* Material UI Alert for Snackbar */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity='warning'
          variant='filled'
          onClose={handleSnackbarClose}
        >
          Please select an option.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SolarQuotesPage;
