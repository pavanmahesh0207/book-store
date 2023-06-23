import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BookContextProvider } from './context/BookContext'
import Home from './components/Home'
import BookListing from './components/BookListing'
import BookDetails from './components/BookDetails'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import './App.css'

function App() {
  return (
    <Router>
      <BookContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BookListing} />
          <Route path="/book/:id" component={BookDetails} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BookContextProvider>
    </Router>
  )
}

export default App
