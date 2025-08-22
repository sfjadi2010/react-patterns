import React from "react";

const MedicalHistory = ({ goNext }) => {
  return (
    <div>
      <h2>Medical History</h2>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default MedicalHistory;
