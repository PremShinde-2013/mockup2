import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ElectricityBillPage from "./components/forms/ElectricityBillPage";
import GetName from "./components/forms/GetName";
import SolarQuotesPage from "./components/forms/SolarQuotesPage";
import SolarRoofFinderPage from "./components/forms/SolarRoofFinderPage";
import SuccessPage from "./components/forms/SuccessPage";
import RoofTopArea from "./components/forms/RoofTopArea";
import Contact from "./components/forms/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/electricity-bill' element={<ElectricityBillPage />} />
            <Route path='/get-name' element={<GetName />} />
            <Route path='/get-rooftop-area' element={<RoofTopArea />} />

            <Route
              path='/solar-roof-finder'
              element={<SolarRoofFinderPage />}
            />
            <Route path='/get-contact' element={<Contact />} />
            <Route path='/success' element={<SuccessPage />} />
            {/* Add a default route for the home page */}
            <Route path='/' element={<SolarQuotesPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0abd61",
    },
    secondary: {
      main: "#fcfcfc",
    },
    text: {
      primary: "#000000",
    },
    background: {
      paper: "#fffeff",
    },
    accent: {
      primary: "#216b38",
    },
    border: {
      card: "#d5e0d5",
    },
    neutral: {
      main: "#00000099",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fcfcfc",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 1px 0.5px #d5e0d5",
        },
      },
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
  },
});

export default App;
