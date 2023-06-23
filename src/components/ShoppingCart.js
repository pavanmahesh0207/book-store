import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import './index.css'

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(BookContext)

  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} by {item.author}{' '}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout">Proceed to Checkout</Link>
      <Link to="/books">Continue Shopping</Link>
    </div>
  )
}

export default ShoppingCart
