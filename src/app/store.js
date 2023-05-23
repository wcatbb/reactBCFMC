import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
