import React from 'react';
import './Card.css';

function Card({ product, onClick }) {
  return (
    <div className="card" onClick={() => onClick(product.id)}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default Card;
