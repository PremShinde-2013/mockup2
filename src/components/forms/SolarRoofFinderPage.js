import React, { useState } from "react";
import { Grid, Container, Typography, Button, TextField } from "@mui/material";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useCallback } from "react";
import styled from "@emotion/styled";
import { green } from "@mui/material/colors";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const StyledButton = styled(Button)({
  color: "black",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
  "&.Mui-selected": {
    backgroundColor: "green",
    color: "white",
  },
});

const SolarRoofFinderPage = () => {
  const [address, setAddress] = useState("");
  const [quoteType, setQuoteType] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleQuoteTypeChange = (event) => {
    setQuoteType(event.target.value);
  };

  const isNextButtonDisabled = () => {
    return address === "" || quoteType === "" || mapCenter === null;
  };

  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2ZXSrfYaqsipTWhD5DKyTZyVRSFL391A", // Replace with your API key
    libraries,
  });

  const onMapLoad = useCallback(
    (map) => {
      if (map) {
        const center = map.getCenter();
        if (center) {
          setMapCenter({
            lat: center.lat(),
            lng: center.lng(),
          });
        }
      }
    },
    [setMapCenter]
  );

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        style={{ height: "80vh", textAlign: "center" }}
      >
        <Grid item xs={12}>
          <Typography variant='h6'>Easiest way to go solar!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Let's find your roof</Typography>
        </Grid>

        <Grid item xs={12} style={{ marginBottom: "16px" }}>
          <GoogleMap
            id='map'
            mapContainerStyle={{ width: "100%", height: "200px" }}
            zoom={15}
            onLoad={onMapLoad}
            options={{
              disableDefaultUI: true,
            }}
          >
            {mapCenter && <Marker position={mapCenter} />}
          </GoogleMap>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "16px" }}>
          <TextField
            id='address'
            label='Address'
            variant='outlined'
            fullWidth
            value={address}
            onChange={handleAddressChange}
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
    </Container>
  );
};

export default SolarRoofFinderPage;
