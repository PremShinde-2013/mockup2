import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import SolarPaneImage from "../../Image/panel.jpg";
import { styled } from "@mui/system";
import { green } from "@mui/material/colors";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%", // Adjust the maximum width as needed
  marginBottom: "20px",
});

const SuccessPage = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container
      maxWidth='xl'
      sx={{ marginTop: 5, paddingLeft: 0, paddingRight: 0 }}
    >
      <Grid container justifyContent='center' spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant='h4' align='center'>
            Easiest way to go solar!
          </Typography>
          <StyledImage src={SolarPaneImage} alt='Solar Panel' />
          <Typography variant='body1' align='left'>
            Our solar expert, <br /> Akhil Kashyap, will reach you to review
            your profile.
          </Typography>

          <Box mt={2}>
            <Button
              fullWidth
              sx={{
                backgroundColor:
                  selectedOption === "Mui-selected" ? green[500] : "white",
                color: selectedOption === "Mui-selected" ? "white" : "black",
                border: "1px solid",
                borderColor:
                  selectedOption === "Mui-selected" ? green[500] : "black",
                "&:hover": {
                  backgroundColor: green[500],
                  color: "white",
                  borderColor: green[500],
                },
                width: { xs: "80%", md: "60%" },
                height: "40px",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
              onClick={() => handleButtonClick("Mui-selected")}
              href='/my-account'
            >
              Go to My Account
            </Button>
          </Box>

          <Box mt={2}>
            <Button
              fullWidth
              sx={{
                backgroundColor:
                  selectedOption === "Mui-selected" ? green[500] : "white",
                color: selectedOption === "Mui-selected" ? "white" : "black",
                border: "1px solid",
                borderColor:
                  selectedOption === "Mui-selected" ? green[500] : "black",
                "&:hover": {
                  backgroundColor: green[500],
                  color: "white",
                  borderColor: green[500],
                },
                width: { xs: "80%", md: "60%" },
                height: "40px",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
              onClick={() => handleButtonClick("Mui-selected")}
              href='/how-it-works'
            >
              How it works?
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuccessPage;
