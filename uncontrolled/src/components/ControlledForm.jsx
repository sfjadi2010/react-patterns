import React, { useState, useEffect } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");

  useEffect(() => {
    if (name.trim() === "") {
      setNameErrorMessage("Name is required");
    } else {
      setNameErrorMessage("");
    }

    if (age === undefined || age < 0) {
      setAgeErrorMessage("Age must be a positive number");
    } else {
      setAgeErrorMessage("");
    }
  }, [name, age]);

  return (
    <>
      <div className="container">
        <h3>Controlled Component Example</h3>
        <form>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <span className="error-message">{nameErrorMessage}</span>
            </div>
          </div>
          <div className="form-control">
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div>
              <span className="error-message">{ageErrorMessage}</span>
            </div>
          </div>
          <div className="form-control">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ControlledForm;
