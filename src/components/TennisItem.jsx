import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TennisItem = ({ name, price, image, addToCart }) => {
  return (
    <Card className="tennis-item-card">
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="item-title">{name}</Card.Title>
        <Card.Text className="item-price">Price: ${price}</Card.Text>
        <div className="btn-container">
          <Button variant="primary" onClick={addToCart} className="ov-btn-grow-skew">
            <i className="bx bx-cart"></i> Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TennisItem;
