import React, { useRef, useState } from "react";

const UnControlledForm = () => {
  const [info, setInfo] = useState("");
  const nameRef = useRef();
  const ageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    console.log(enteredName, enteredAge);
    setInfo(`Name: ${enteredName}, Age: ${enteredAge}`);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <>
      <div className="container">
        <h3>Uncontrolled Component Example</h3>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={nameRef}
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              ref={ageRef}
            />
          </div>
          <div className="form-control">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default UnControlledForm;
