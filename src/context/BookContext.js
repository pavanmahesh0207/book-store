import React, { createContext, useEffect, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [cartItems, setCartItems] = useState([])

  const booksData = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Genre 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Genre 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      genre: 'Genre 3',
    },
  ]

  useEffect(() => {
    setBooks(booksData)
  }, [])

  // Functions to update the book data and cart items

  const addToCart = (book) => {
    setCartItems([...cartItems, book])
  }

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter((item) => item.id !== bookId))
  }

  return (
    <BookContext.Provider
      value={{ books, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </BookContext.Provider>
  )
}
