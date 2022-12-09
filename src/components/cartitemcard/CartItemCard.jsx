import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CartItemCard.css';
import { format_price } from '../utilities/Currency';

const CartItemCard = (headphones) => {
  // const quantity = 0
  return (
    <>
    <div className='d-flex justify-content-center'>
      <Card className='cartallcards' style={{ width: '28rem', height:'10rem' }}>
        <Card.Img variant="top" src={headphones.headphone.image} style={{ width: '10rem', height:'10rem' }} />
        <Card.Body>
          <Card.Title>{headphones.headphone.name}</Card.Title>
          <Card.Text>{format_price(headphones.headphone.price)}</Card.Text>
          <Card.Text>
            {/* <Button variant="primary">-</Button> */}
            <span className="fs-3">{headphones.headphone.quantity}</span> in cart
            {/* <Button variant="primary">+</Button> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default CartItemCard