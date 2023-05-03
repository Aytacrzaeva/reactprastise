import React from 'react';
import Card from '../card/card';

function List({ data, onClick }) {
  return (
    <ul className="list">
      {data.map((product) => (
        <li key={product.id}>
          <Card product={product} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default List;