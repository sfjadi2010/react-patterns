import React from 'react'

const UserInfo = ({ user }) => {
    const { name, username, email, address, phone, website, company } = user || {};
    const { street, suite, city, zipcode } = address || {};
    const { companyName, catchPhrase, bs } = company || {};
  return (
    <>
        <h3> User Info </h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {`${street}, ${suite}, ${city}, ${zipcode}`}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {companyName}</p>
        <p><strong>Catchphrase:</strong> {catchPhrase}</p>
        <p><strong>BS:</strong> {bs}</p>
    </>
  )
}

export default UserInfo