import React, { useState } from 'react';
import List from '../list/list';
import Card from '../card/card';
import './Content.css';

function Content() {
  const [bestSeller, setBestSeller] = useState(null);

  const data = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30 },
  ];
  
  const handleClick = (id) => {
    setBestSeller(id);
  };

  const resetBestSeller = () => {
    setBestSeller(null);
  };

  return (
    <main>
      <h1>Welcome to our online store!</h1>
      <List data={data} onClick={handleClick} />
      {bestSeller && (
        <p className="best-seller" onClick={resetBestSeller}>
          Best Seller: {data.find((p) => p.id === bestSeller).name}
        </p>
      )}
    </main>
  );
}

export default Content;