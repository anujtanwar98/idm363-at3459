import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Headphonescard.css';

const Headphonescard = (headphones) => {
  // const quantity = 0
  return (
    <>
    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={headphones.headphone.headphoneimage} />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{headphones.headphone.price}</Card.Text>
        <div class="d-flex justify-content-center">
          {/* {quantity === 0 ? ( */}
            <Button className="center" variant="primary">Add to Cart</Button>
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
      </Card.Body>
    </Card>
    </>
  )
}

export default Headphonescard