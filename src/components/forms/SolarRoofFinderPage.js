import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { styled } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { green, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/company logo.png";

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

const MAP_LIBRARIES = ["places"];

const SolarRoofFinderPage = () => {
  const [address, setAddress] = useState("");
  const [quoteType, setQuoteType] = useState("");
  const [mapCenter, setMapCenter] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleButtonClick = () => {
    if (address === "" || quoteType === "" || mapCenter === null) {
      setShowError(true);
    } else {
      setShowError(false);
      setSelectedOption("Next");
      // You can navigate to the next page or perform any other action
      // Example: navigate("/next-page");
    }
  };

  const handleQuoteTypeChange = (event) => {
    setQuoteType(event.target.value);
  };

  const isNextButtonDisabled = () => {
    return address === "" || quoteType === "" || mapCenter === null;
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries: MAP_LIBRARIES,
  });

  const onMapLoad = (map) => {
    if (map) {
      const center = map.getCenter();
      if (center) {
        setMapCenter({
          lat: center.lat(),
          lng: center.lng(),
        });
      }
    }
  };

  const onPlaceSelected = (place) => {
    setAddress(place.formatted_address);

    if (place.geometry) {
      setMapCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
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
        style={{ height: "80vh", textAlign: "center" }}
      >
        <Grid item xs={12}>
          <Typography variant='h6'>Let's find your roof</Typography>
        </Grid>

        <Grid item xs={12} style={{ marginBottom: "16px" }}>
          <Autocomplete
            apiKey=''
            onPlaceSelected={onPlaceSelected}
            types={["address"]}
            componentrestrictions={{ country: "us" }}
          />
        </Grid>

        <Grid item xs={12} style={{ height: "60vh", position: "relative" }}>
          {isLoaded && (
            <GoogleMap
              id='map'
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              zoom={15}
              center={mapCenter}
              onLoad={onMapLoad}
            >
              {mapCenter && (
                <Marker position={{ lat: mapCenter.lat, lng: mapCenter.lng }} />
              )}
            </GoogleMap>
          )}
        </Grid>

        <Grid item style={{ marginLeft: "auto", marginTop: "40px" }}>
          <StyledButton
            disabled={isNextButtonDisabled()}
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

      {/* Snackbar for displaying errors */}
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert
          severity='error'
          variant='filled'
          onClose={() => setShowError(false)}
        >
          Please fill in all the fields and select a location on the map.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SolarRoofFinderPage;
