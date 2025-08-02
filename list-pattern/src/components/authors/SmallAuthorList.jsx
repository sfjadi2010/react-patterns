import React from 'react'

const SmallAuthorList = ({author}) => {
  const { name, age } = author;
  return (
    <>
      <p>Name: {name}, Age: {age}</p>
    </>
  )
}

export default SmallAuthorList