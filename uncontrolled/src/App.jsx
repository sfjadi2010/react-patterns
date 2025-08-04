import React, { useState } from "react";
import "./App.css";
import ControlledModal from "./components/ControlledModal";
import ControlledForm from "./components/ControlledForm";

const App = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShouldDisplay(!shouldDisplay);}

  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <ControlledForm />
      </ControlledModal>
      <div>
        <button onClick={handleClick} style={{ zIndex: 1000 }}>
          {shouldDisplay ? "Hide Modal" : "Show Modal"}
        </button>
      </div>
    </>
  );
};

export default App;
