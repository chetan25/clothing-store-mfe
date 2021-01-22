import React from "react";
import {CartIconWrapper, ItemCount, ShoppingIconWrapper } from './cart-icon.style';
import ShoppingIcon from '-!svg-react-loader!../assets/cart-icon.svg';
import { CartItemsCount, ShowCartDropdown } from '../global-atoms';
import { useRecoilValue, useRecoilState } from 'recoil';

const CartIcon = () => {
    const cartItemsCount = useRecoilValue(CartItemsCount);
    const [dropdownStateValue, setDropdownState] = useRecoilState(ShowCartDropdown);

    return (
      <CartIconWrapper onClick={() => setDropdownState(!dropdownStateValue)}>
          <ShoppingIconWrapper>
            <ShoppingIcon className='shopping-icon'/>
          </ShoppingIconWrapper>
          <ItemCount>{cartItemsCount}</ItemCount>
      </CartIconWrapper>
    );
};

export default CartIcon;