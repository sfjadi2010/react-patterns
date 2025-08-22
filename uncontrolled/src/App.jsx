import React, { useState } from "react";
import "./App.css";
import ControlledModal from "./components/ControlledModal";
import ControlledForm from "./components/ControlledForm";
import UncontrolledFlow from "./components/UncontrolledFlow";
import Identification from "./components/Identification";
import Demographics from "./components/Demographics";
import ContactInformation from "./components/ContactInformation";
import MedicalHistory from "./components/MedicalHistory";

const App = () => {

  return (
    <>
      <h2>Patient Information</h2>
      <UncontrolledFlow>
        <Identification />
        <Demographics />
        <ContactInformation />
        <MedicalHistory />
      </UncontrolledFlow>
    </>
  );
};

export default App;
