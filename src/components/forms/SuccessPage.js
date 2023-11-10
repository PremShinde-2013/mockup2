import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import SolarPaneImage from "../../Image/panel.jpg";
import { styled } from "@mui/system";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%", // Adjust the maximum width as needed
  marginBottom: "20px",
});

const SuccessPage = () => {
  return (
    <Container
      maxWidth='xl'
      style={{ marginTop: 50, paddingLeft: 0, paddingRight: 0 }}
    >
      <Grid container justifyContent='flex-start' spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant='h4' align='center'>
            Easiest way to go solar!
          </Typography>
          <StyledImage src={SolarPaneImage} alt='Solar Panel' />
          <Typography variant='body1' align='left'>
            Our solar expert, <br /> Akhil Kashyap, will reach you to review
            your profile.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: 20 }}
            href='/my-account'
          >
            Go to My Account
          </Button>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: 20 }}
            href='/my-account'
          >
            How it works?
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuccessPage;
