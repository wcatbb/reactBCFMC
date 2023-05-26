import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';
import { dutiesReducer } from '../features/duties/dutiesSlice';
import { officersReducer } from '../features/officers/officersSlice';
import { featuredRoleReducer } from '../features/officers/featuredRoleSlice';
import { itemsReducer } from '../features/shop/itemsSlice';
import { cartReducer } from '../features/shop/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    officers: officersReducer,
    duties: dutiesReducer,
    featuredRole: featuredRoleReducer,
    items: itemsReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
