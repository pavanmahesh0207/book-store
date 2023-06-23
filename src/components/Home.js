import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to the Bookstore</h1>
      <Link to="/books">Browse Books</Link>
    </div>
  )
}

export default Home
