import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice'; 

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  return (
    <div className="container mt-1px mx-auto px-4">
      <header className="text-center my-8">
        <h1 className="text-5xl font-extrabold">Welcome to Our Store</h1>
      </header>
      
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold my-4">About Us</h2>
        <p className="text-lg leading-relaxed mx-auto max-w-3xl">
          Welcome to our store! We are dedicated to providing you with the best products at unbeatable prices. 
          Our team is passionate about curating a selection of items that meet your needs and exceed your expectations. 
          Explore our diverse range of products and enjoy a seamless shopping experience with us. 
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold my-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border bg-slate-200 p-4 rounded shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl text-center font-bold mb-2">{product.name}</h3>
              <p className="mb-2 text-center">{product.description}</p>
              <p className="text-green-600 text-center font-semibold mb-4">${product.price}</p>
              <a href={`/product/${product.id}`} className="text-blue-500 text-center hover:underline">
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
