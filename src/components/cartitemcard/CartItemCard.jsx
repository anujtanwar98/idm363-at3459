import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CartItemCard.css';
import { format_price } from '../utilities/Currency';

const CartItemCard = (headphones) => {
  // const quantity = 0
  return (
    <>
    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={headphones.headphone.image} />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{format_price(headphones.headphone.price)}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default CartItemCard