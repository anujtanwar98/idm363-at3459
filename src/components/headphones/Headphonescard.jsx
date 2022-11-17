import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Headphonescard.css';

const Headphonescard = (headphones) => {
  return (
    <>
    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={headphones.headphone.headphoneimage} />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{headphones.headphone.price}</Card.Text>
        <div class="d-flex justify-content-center">
        <Button className="center" variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Headphonescard