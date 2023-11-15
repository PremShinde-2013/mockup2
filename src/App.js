import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ElectricityBillPage from "./components/forms/ElectricityBillPage";
import GetName from "./components/forms/GetName";
import SolarQuotesPage from "./components/forms/SolarQuotesPage";
import SolarRoofFinderPage from "./components/forms/SolarRoofFinderPage";
import SuccessPage from "./components/forms/SuccessPage";
import RoofTopArea from "./components/forms/RoofTopArea";
import Contact from "./components/forms/Contact";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* <Route path='/' element={<SolarQuotesPage />} /> */}

          <Route path='/electricity-bill' element={<ElectricityBillPage />} />
          <Route path='/get-name' element={<GetName />} />
          <Route path='/get-rooftop-area' element={<RoofTopArea />} />

          <Route path='/solar-roof-finder' element={<SolarRoofFinderPage />} />
          <Route path='/get-contact' element={<Contact />} />
          <Route path='/success' element={<SuccessPage />} />
          {/* Add a default route for the home page */}
          <Route path='/' element={<SolarQuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
