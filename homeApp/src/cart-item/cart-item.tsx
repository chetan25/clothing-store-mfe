import React from "react";
import { CartItemWrapper, ItemDetails } from './cart-item.style';

interface IProps {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

const CartItem = (props: IProps) => {
    const { name, imageUrl, price, quantity } = props;

    return (
        <CartItemWrapper>
            <img src={imageUrl} alt='cart item' />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} * {price}</span>
            </ItemDetails>
        </CartItemWrapper>
    );
};

export default CartItem;