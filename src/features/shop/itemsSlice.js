import { createSlice } from '@reduxjs/toolkit';
import { SHOP_ITEMS } from '../../app/shared/SHOP_ITEMS';

const initialState = {
    itemsArray: SHOP_ITEMS
}

const itemsSlice = createSlice({
    name: 'items',
    initialState
});

export const itemsReducer = itemsSlice.reducer;

export const selectAllItems = (state) => {
    return state.items.itemsArray;
};

export const selectItemById = (id) => (state) => {
    return state.items.itemsArray
        .find((item) => item.id === parseInt(id));
};