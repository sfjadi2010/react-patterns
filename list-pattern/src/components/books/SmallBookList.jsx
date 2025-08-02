import React from 'react'

const SmallBookList = ({book}) => {
    const { title, author } = book;
  return (
    <>
        <p>Title: {title}, Author: {author}</p>
    </>
  )
}

export default SmallBookList