import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Headphonescard.css';
import { format_price } from '../utilities/Currency';
import { Link } from "react-router-dom";

const Headphonescard = (headphones) => {
  const handleAddToCart = (item) => {
    addItemToCart(item)
  
  }
  const addItemToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}
    cart.cartItems = cart.cartItems || []
    const itemInCart = cart.cartItems.find((cartItem) => cartItem.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1
    } else {
      
      cart.cartItems.push({ id:item.id, name:item.name, price : item.price, image:item.headphoneimage, quantity: 1 })
    }
    cart["totalValue"] = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log("updatedCart", cart, format_price(cart.totalValue))
  }
  // const quantity = 0
  return (
    <>
    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={headphones.headphone.headphoneimage} />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{format_price(headphones.headphone.price)}</Card.Text>
        <div className="d-flex justify-content-center">
          {/* {quantity === 0 ? ( */}
            <Button className="center" onClick={() => handleAddToCart(headphones.headphone)} variant="primary">Add to Cart</Button>
          {/* ): <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem"}}>
              <div className="d-flex align-items justify-content-center" style={{ gap: ".5rem"}}>
              <Button className="center" variant="primary">-</Button>
            <div>
            <span className="fs-3">{quantity}</span> in cart
            </div>
            <Button className="center" variant="primary">+</Button>
              </div>
              <Button className="center" variant="danger" size="sm">Remove</Button>
            </div>} */}
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <Link className='btn btn-outline-dark' to={`/detailpage/${headphones.headphone.id}`}>More Info</Link> 
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Headphonescard