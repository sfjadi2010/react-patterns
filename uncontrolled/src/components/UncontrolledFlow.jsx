import React, { useState } from "react";

const UncontrolledFlow = ({ children }) => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < React.Children.count(children) - 1) {
      setCurrentStep(currentStep + 1);
    } 
  };

  const currentChild = React.Children.toArray(children)[currentStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default UncontrolledFlow;
