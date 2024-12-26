import React, { useState } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <div>Error fetching products: {error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
