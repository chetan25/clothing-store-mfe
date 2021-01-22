import React from "react";
import { CheckoutItemWrapper, ImageContainer, QuantityWrapper, RemoveButton } from './checkoutItem.style';
import { AddToCart, RemoveItemFromCart, RemoveItem } from 'Shell/Atoms';
import { useSetRecoilState } from 'recoil';

interface IProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
}

const CheckOutItems = (props: IProps) => {
    const { item } = props;
    const { name, imageUrl, price, quantity } = item;
    const setCartItems = useSetRecoilState<any>(AddToCart);
    const removeItemFromCart = useSetRecoilState(RemoveItemFromCart);
    const removeItem = useSetRecoilState(RemoveItem);

    const addItem = () => {
        setCartItems(item);
    };

    const deleteItem = () => {
        removeItem(item);
    }

    const clearItemFromCart = () => {
        removeItemFromCart(item);
    };

    return (
      <CheckoutItemWrapper className='checkout-item'>
          <ImageContainer className='image-container'>
              <img alt='cart item' src={imageUrl}/>
          </ImageContainer>
          <span className='name'>{name}</span>
          <QuantityWrapper className='quantity'>
              <div className='arrow' onClick={deleteItem}>&#10094;</div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={addItem}>&#10095;</div>
          </QuantityWrapper>
          <span className='price'>{price}</span>
          <RemoveButton className='remove-button' onClick={clearItemFromCart}>&#10005;</RemoveButton>
      </CheckoutItemWrapper>
    );
};

export default CheckOutItems;