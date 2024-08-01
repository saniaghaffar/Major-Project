import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    details: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.details = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.details = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
