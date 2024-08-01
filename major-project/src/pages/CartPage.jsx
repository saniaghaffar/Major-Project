import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';

function CartPage() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg font-medium">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map(item => (
            <div key={item.id} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-green-600 text-lg font-medium mb-4">${item.price}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-6">
        <Link to="/checkout" className="bg-red-100 border border-red-300 hover:bg-red-400 text-red-800 px-6 py-3 rounded-lg font-medium transition duration-300">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
