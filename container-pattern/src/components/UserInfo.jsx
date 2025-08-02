import React from "react";

const UserInfo = ({ user }) => {
  console.log("UserInfo component rendered with user:", user);

  if (!user) {
    return <div>Loading user...</div>;
  }

  const { name, age, email } = user;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </>
  );
};

export default UserInfo;
