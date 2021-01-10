import { atom, selector } from "recoil";
import SECTIONS_DATA from "./section-data";

export const CartItems = atom({
  key: "cartItems",
  default: []
});

export const CartItemsCount = selector({
    key: 'cartItemsCount',
    get: ({get}) => {
      const items: any[] = get(CartItems);

      return items.length;
    },
});

export const ItemsDirectory = atom({
  key: 'itemsDirectory',
  default: SECTIONS_DATA
});
