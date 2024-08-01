import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products'); 
  return response.json();
});

const initialState = {
  items: [
    { id: '1', name: 'Classic White T-Shirt', description: 'A comfortable and stylish white t-shirt.', price: 19.99 },
    { id: '2', name: 'Blue Jeans', description: 'Slim-fit blue jeans for everyday wear.', price: 49.99 },
    { id: '3', name: 'Running Shoes', description: 'Lightweight and durable running shoes.', price: 79.99 },
    { id: '4', name: 'Leather Wallet', description: 'Premium quality leather wallet.', price: 29.99 },
    { id: '5', name: 'Sport Watch', description: 'Digital sport watch with multiple features.', price: 99.99 },
    { id: '6', name: 'Sunglasses', description: 'Stylish sunglasses with UV protection.', price: 39.99 },
    { id: '7', name: 'Backpack', description: 'Spacious and durable backpack for all your needs.', price: 59.99 },
    { id: '8', name: 'Bluetooth Headphones', description: 'Wireless headphones with high-quality sound.', price: 89.99 },
    { id: '9', name: 'Smartphone Case', description: 'Protective and sleek case for your smartphone.', price: 14.99 },
    { id: '10', name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with high precision.', price: 24.99 },
    { id: '11', name: 'Gaming Keyboard', description: 'Mechanical keyboard with RGB lighting.', price: 119.99 },
    { id: '12', name: 'Water Bottle', description: 'Stainless steel water bottle with insulation.', price: 19.99 },
    { id: '13', name: 'Travel Pillow', description: 'Comfortable pillow for travel and sleep.', price: 29.99 },
  ],
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      state.items[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
