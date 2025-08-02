import React from 'react'

const LargeAuthorList = ({author}) => {
  const { name, age, avatar } = author;
  return (
    <>
      <h2>Author Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Avatar: <img src={avatar} alt={`${name}'s avatar`} /></p>
    </>
  )
}

export default LargeAuthorList