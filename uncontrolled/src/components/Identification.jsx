import React from "react";
import Demographics from "./Demographics";

const Identification = ({goNext}) => {
  return (
    <div>
      <h2>Identification</h2>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default Identification;
