import { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {Object.keys(cart).map(productId => (
          <div key={productId}>
            Product ID: {productId} - Quantity: {cart[productId].quantity}
            <h5>{productId.id}</h5>
            <h5>Name:{productId.name}</h5>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
