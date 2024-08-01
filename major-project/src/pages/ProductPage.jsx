import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function ProductPage() {
  const { id } = useParams();
  const product = useSelector(state => state.products.find(p => p.id === id));
  const dispatch = useDispatch();

  console.log("Product ID from URL:", id); // Log the ID to verify it's correct
  console.log("Product found:", product); // Log the product to verify it's found

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-green-600">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
