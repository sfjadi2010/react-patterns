import React from "react";

export const UserInfo = ({ user }) => {
  const { name, age, email } = user || {};
  return (
    user && (
      <div>
        <h2>User Info</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    )
  );
};
