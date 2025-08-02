import React from 'react'

const LargeBookList = ({book}) => {
    const { title, author, published } = book;
  return (
    <>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Published: {published}</p>
    </>
  )
}

export default LargeBookList