import React from "react";

const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={index} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;
