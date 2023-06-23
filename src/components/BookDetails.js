import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import './index.css'

const BookDetails = () => {
  const { id } = useParams()
  const { books, addToCart } = useContext(BookContext)
  const book = books.find((book) => book.id === id)

  return (
    <div className="App">
      <h2>Book Details</h2>
      {book ? (
        <div>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
      <Link to="/books">Back to Book Listing</Link>
    </div>
  )
}

export default BookDetails
