import React, { useState, useEffect } from "react";
import axios from "axios";

const Container = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(resourceUrl);
        setResource(response.data);
      } catch (error) {
        console.error("Error fetching resource:", error);
      }
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default Container;
