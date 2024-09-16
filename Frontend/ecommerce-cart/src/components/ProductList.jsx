import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCart= ()=>{
    navigate('/cart')
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <div key={product.productId}>
            <h5> ID:{product.productId}</h5>
            <h5> Name:{product.name}</h5>
            <h5>Price:{product.price}</h5>
            <h5>Category:{product.category}</h5>

            <Button w={"30%"} m={'auto'}  _hover={{ bg: "blue.900", color: "white" }}
                onClick={handleCart} >Add to Cart</Button>
       </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
