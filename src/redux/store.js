import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});

export default store;