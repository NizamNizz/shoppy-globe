import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} style={{ width: '100px' }} />
      <p>${product.price}</p>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
