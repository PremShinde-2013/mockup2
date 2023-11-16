import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import SolarPaneImage from "../../Image/panel.jpg";
import { styled } from "@mui/system";
import logo from "../../Image/company logo.png";
import { useTheme } from "@mui/material/styles";

const SuccessPage = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const theme = useTheme();

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const StyledImage = styled("img")({
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    marginBottom: "20px",
    marginTop: "20px",
  });

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      borderColor: theme.palette.primary.main,
    },
    width: { xs: "80%", md: "60%" },
    height: "40px",
    fontSize: { xs: "0.8rem", md: "1rem" },
    margin: "10px",
  };

  return (
    <Container maxWidth='xl'>
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
      <Grid container justifyContent='center' spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <StyledImage
            src={SolarPaneImage}
            alt='Solar Panel'
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              marginBottom: "30px",
              marginTop: "40px",
            }}
          />
          <Typography
            variant='h5'
            align='left'
            sx={{
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            Our solar experts <br /> will reach <br /> you to review your
            profile.
          </Typography>

          <Box mt={5}>
            <Button
              fullWidth
              sx={{
                ...buttonStyles,
                backgroundColor:
                  selectedOption === "Mui-selected"
                    ? theme.palette.primary.main
                    : "white",
              }}
              onClick={() => handleButtonClick("Mui-selected")}
              href='/how-it-works'
            >
              How Vaysolar Works?
            </Button>
          </Box>

          <Box mt={2}>
            <Button
              fullWidth
              sx={{
                ...buttonStyles,
                backgroundColor:
                  selectedOption === "Mui-selected"
                    ? theme.palette.primary.main
                    : "white",
              }}
              onClick={() => handleButtonClick("Mui-selected")}
              href='/my-account'
            >
              GO to my Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuccessPage;
