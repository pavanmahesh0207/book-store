import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import './index.css'

const BookListing = () => {
  const { books } = useContext(BookContext)

  return (
    <div className="App">
      <h2>Book Listing</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default BookListing
