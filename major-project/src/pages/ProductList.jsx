import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (productStatus === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-green-600">${product.price}</p>
            <a href={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
