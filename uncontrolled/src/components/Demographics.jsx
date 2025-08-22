import React from 'react'

const Demographics = ({goNext}) => {
  return (
    <div>
      <h2>Demographics</h2>
      <button onClick={goNext}>Next</button>
    </div>
  );
}

export default Demographics