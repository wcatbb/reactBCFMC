import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { userReducer } from '../features/user/userSlice';
import { dutiesReducer } from '../features/duties/dutiesSlice';
import { officersReducer } from '../features/officers/officersSlice';
import { featuredRoleReducer } from '../features/officers/featuredRoleSlice';
import { itemsReducer } from '../features/shop/itemsSlice';
import { cartReducer } from '../features/shop/cartSlice';

const persistConfig = {
  key: 'persist-key',
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  officers: officersReducer,
  duties: dutiesReducer,
  featuredRole: featuredRoleReducer,
  items: itemsReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger])
});

const persistor = persistStore(store);

export { store };
export { persistor };