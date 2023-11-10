import React from "react";
import { Grid, Container, Button, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";

// Custom styled component for the buttons
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

const SolarQuotesPage = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
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
        style={{ height: "90vh", flexDirection: "column" }}
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
        <Grid item style={{ marginLeft: "auto", marginTop: "40px" }}>
          <StyledButton
            // variant='outlined'
            onClick={() => handleButtonClick("Next")} // Enable the button
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
    </Container>
  );
};

export default SolarQuotesPage;
