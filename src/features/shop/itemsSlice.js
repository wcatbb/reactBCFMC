import { SHOP_ITEMS } from "../../app/shared/SHOP_ITEMS";

export const selectAllItems = () => {
    return SHOP_ITEMS;
};

export const selectItemById = (id) => {
    return SHOP_ITEMS.find((item) => item.id === parseInt(id));
};