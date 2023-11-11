import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Alert,
} from "@mui/material";
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

// Set the border color to green for TextField
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderColor: green[500],
  },
});

// Set the color of the checkmark to green
const StyledCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: green[500],
  },
});

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [calls, setCalls] = useState(false);
  const [sms, setSms] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    // Validate the phone number
    const isValidNumber = /^\d{10}$/.test(sms);
    if (!isValidNumber) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Reset error state
    setError("");

    // Proceed with the button click logic
    setSelectedOption("Next");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "whatsapp") {
      setWhatsapp(checked);
    } else if (name === "calls") {
      setCalls(checked);
    } else if (name === "sms") {
      setSms(checked);
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
            <Typography variant='h5'>To reach you</Typography>
          </Grid>

          <Grid item xs={12}>
            <StyledTextField
              label='Contact Number'
              variant='outlined'
              color='success'
              fullWidth
              value={sms}
              onChange={(e) => {
                // Validate and set the phone number
                const inputValue = e.target.value;
                setSms(inputValue);
                if (!/^\d{0,10}$/.test(inputValue)) {
                  setError("Please enter a valid 10-digit phone number.");
                } else {
                  setError("");
                }
              }}
            />
            {/* Display the alert if there is an error */}
            {error && (
              <Alert severity='error' style={{ marginTop: "8px" }}>
                {error}
              </Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <FormControl component='fieldset'>
              <Grid container spacing={2} style={{ textAlign: "justify" }}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={whatsapp}
                        onChange={handleCheckboxChange}
                        name='whatsapp'
                      />
                    }
                    label='Only WhatsApp'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={calls}
                        onChange={handleCheckboxChange}
                        name='calls'
                      />
                    }
                    label='Only Calls'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckbox
                        checked={sms}
                        onChange={handleCheckboxChange}
                        name='sms'
                      />
                    }
                    label='Only SMS'
                  />
                </Grid>
              </Grid>
            </FormControl>
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
                Complete
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

export default Contact;
