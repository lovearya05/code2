import { configureStore } from '@reduxjs/toolkit';
import userReducer from './storeSlicer';


export default configureStore({
  reducer: {
    appData : userReducer,
  },
});

