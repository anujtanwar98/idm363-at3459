import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Headphonescard.css';

const Headphonescard = (headphones) => {
  return (
    <>
    {/* <div className="headphonescard">
        <p className="headphone-title">{headphones.headphone.name}</p>
        <p className="headphone-title">{headphones.headphone.price}</p>
    </div>
    <Button variant="primary">Buy Now</Button>{' '} */}

    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{headphones.headphone.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Headphonescard