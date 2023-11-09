import {createSlice } from '@reduxjs/toolkit';
export const storeSlice = createSlice({
  name:"appData",
  initialState:{
    user:null,
  },
  
  reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
})

export const { login, logout } = storeSlice.actions;
export default storeSlice.reducer;
