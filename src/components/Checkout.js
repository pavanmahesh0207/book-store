import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import './index.css'

const Checkout = () => {
  const { cartItems } = useContext(BookContext)

  const placeOrder = () => {}

  return (
    <div className="App">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. Please add items before proceeding to checkout.
        </p>
      ) : (
        <div>
          <h3>Selected Books:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} by {item.author}
              </li>
            ))}
          </ul>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
      <Link to="/cart">Back to Cart</Link>
    </div>
  )
}

export default Checkout
