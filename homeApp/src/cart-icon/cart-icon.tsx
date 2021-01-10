import React from "react";
import {CartIconWrapper, ItemCount, ShoppingIconWrapper } from './cart-icon.style';
import ShoppingIcon from '-!svg-react-loader!../assets/cart-icon.svg';
import { CartItemsCount } from '../global-atoms';
import { useRecoilValue } from 'recoil';

const CartIcon = () => {
    const cartItemsCount = useRecoilValue(CartItemsCount);
    return (
      <CartIconWrapper>
          <ShoppingIconWrapper>
            <ShoppingIcon className='shopping-icon'/>
          </ShoppingIconWrapper>
          <ItemCount>{cartItemsCount}</ItemCount>
      </CartIconWrapper>
    );
};

export default CartIcon;