import {createSlice } from '@reduxjs/toolkit';
export const storeSlice = createSlice({
  name:"appData",
  initialState:{
    user:null,
    userProfileType:null,
  },
  
  reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
      updateUserProfileType : (state, action) =>{
        state.userProfileType = action.payload;
      }
    },
})

export const { login, logout, updateUserProfileType } = storeSlice.actions;
export default storeSlice.reducer;
