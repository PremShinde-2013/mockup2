import React from "react";
import { Grid, Container, Typography, Button, Slider } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green } from "@mui/material/colors";

// Custom styled component for the button
const ResponsiveButton = styled(Button)({
  width: "100%",
  height: "80px",
  border: "none",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "none",
  },
});

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

const ElectricityBillPage = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [sliderValue, setSliderValue] = React.useState(4000); // Set the initial value of the slider

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
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
        style={{ height: "100vh", flexDirection: "column" }}
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
          <Grid item style={{ marginLeft: "auto", marginTop: "40px" }}>
            <StyledButton
              onClick={() => handleButtonClick("Next")}
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
    </Container>
  );
};

export default ElectricityBillPage;
