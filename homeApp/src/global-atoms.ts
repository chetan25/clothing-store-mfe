import { atom, selector } from "recoil";
import SECTIONS_DATA from "./section-data";


export const CartItems = atom<any>({
  key: "cartItems",
  default: [],
});

export const AddToCart = selector({
  key: 'addToCart',
  get: ({ get }) => {
    return get(CartItems);
  },
  set: ({ set }, newItem: any) => {
    set(CartItems, (previousState: any) => {
      const existingItem = previousState.find((cartItem: any) => cartItem.id === newItem.id);
      if (existingItem) {
          return previousState.map((cartItem: any) => {
            return cartItem.id === newItem.id ?
                {...cartItem, quantity: cartItem.quantity + 1} :
                cartItem;
          });
      }

      return [...previousState, {...newItem, quantity: 1}];
    })
  }
});

export const RemoveItemFromCart = selector({
  key: 'removeItemFromCart',
  get: ({ get }) => {
    return get(CartItems);
  },
  set: ({ set }, itemToRemove: any) => {
    set(CartItems, (previousState: any) => {
      return previousState.filter((item: any) => item.id !== itemToRemove.id);
    })
  }
});

export const ClearCart = selector({
  key: 'clearCart',
  get: ({ get }) => {
    return get(CartItems);
  },
  set: ({ set }) => {
    set(CartItems, () => {
      return [];
    })
  }
});

export const RemoveItem = selector({
  key: 'removeItem',
  get: ({ get }) => {
    return get(CartItems);
  },
  set: ({ set }, itemToRemove: any) => {
    set(CartItems, (previousState: any) => {
      const existing = previousState.find((item: any) => item.id === itemToRemove.id);

      if(existing) {
          if(existing.quantity === 1) {
              return previousState.filter((item: any) => item.id !== existing.id);
          }
          return previousState.map((item: any) => {
              return item.id !== existing.id ? item : {
                  ...item,
                  quantity: item.quantity -1
              }
          });
      }

      return previousState;
    })
  }
});

export const CartItemsCount = selector({
    key: 'cartItemsCount',
    get: ({get}) => {
      const items: any[] = get(CartItems);
     
      return items.reduce((acc: any, val: any) => acc + val.quantity, 0);
    },
});

export const ItemsDirectory = atom({
  key: 'itemsDirectory',
  default: SECTIONS_DATA
});


export const ProductsData = atom({
  key: 'productsData',
  default: {}
});

export const CartTotal = selector({
  key: 'cartTotal',
  get: ({get}) => {
    const cartItems: any[] = get(CartItems);
     
    return cartItems.reduce((acc: any, val: any) => acc +(val.quantity * val.price), 0)
  }
})


export const ShowCartDropdown = atom({
  key: 'showDropdown',
  default: false
});