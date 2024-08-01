import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from '../redux/slices/productsSlice';

function AdminPanel() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items || []);

  const handleAddProduct = () => {
    const newProduct = { id: '5', name: 'New Product', description: 'Description of New Product', price: 59.99 };
    dispatch(addProduct(newProduct));
  };

  const handleUpdateProduct = (id) => {
    const updatedProduct = { id, name: 'Updated Product', description: 'Updated Description', price: 69.99 };
    dispatch(updateProduct(updatedProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-center text-4xl font-bold mb-4">Admin Panel</h1>
      <button onClick={handleAddProduct} className="font-bold text-2xl mb-4">Add Product</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 bg-slate-200 mx-2 my-2">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-green-600">${product.price}</p>
              <button onClick={() => handleUpdateProduct(product.id)} className="mr-2">Update</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
