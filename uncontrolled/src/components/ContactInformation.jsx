import React from 'react'

const ContactInformation = ({ goNext}) => {
  return (
    <div>
      <h2>Contact Information</h2>
        <button onClick={goNext}>Next</button>
    </div>
  );
}

export default ContactInformation