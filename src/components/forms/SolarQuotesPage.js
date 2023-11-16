import React from "react";
import { Grid, Container, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/company logo.png";
import useSolarQuotesStore from "../../store/SolarQuotesStore"; // Import the Zustand store
import { useTheme } from "@mui/material/styles";

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
  const {
    selectedOption,
    isButtonDisabled,
    setSelectedOption,
    setIsButtonDisabled,
  } = useSolarQuotesStore();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setIsButtonDisabled(false);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      navigate("/electricity-bill");
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
        justifyContent='flex-start'
        alignItems='center'
        style={{ height: "60vh", flexDirection: "column" }}
      >
        <Typography
          variant='h6'
          sx={{
            marginBottom: { xs: "10px", md: "20px" },
            marginTop: { xs: "70px", md: "30px" },
            textAlign: "center",
          }}
        >
          Requesting quotes for
        </Typography>

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
        <Grid
          item
          sx={{
            marginLeft: "340px",
            marginTop: "40px",
            "@media (max-width:600px)": {
              marginLeft: "170px",
            },
          }}
        >
          <StyledButton
            onClick={handleNextButtonClick}
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
    </Container>
  );
};

export default SolarQuotesPage;
