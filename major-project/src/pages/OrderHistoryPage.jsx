import React from 'react';
import { useSelector } from 'react-redux';

function OrderHistoryPage() {
  const user = useSelector(state => state.user);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">Order History</h1>
      {user.isAuthenticated ? (
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <p className="text-lg font-medium text-gray-700">Order details will be shown here...</p>
          {/* Placeholder for actual order history content */}
        </div>
      ) : (
        <div className="bg-red-100 border border-red-300 text-red-800 p-6 mx-32 rounded-lg shadow-md">
          <p className="text-lg font-medium">Please log in to see your order history.</p>
        </div>
      )}
    </div>
  );
}

export default OrderHistoryPage;
