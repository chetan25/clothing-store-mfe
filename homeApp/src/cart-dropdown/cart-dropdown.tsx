import React from "react";
import { CartDropdown, CartItemsWrapper } from './cart-dropdown.style';
import { CartItems } from '../global-atoms';
import { useRecoilValue } from 'recoil';
import CartItem from "../cart-item/cart-item";
import Button from '../button/button';
import { useHistory } from "react-router-dom";

// import Button from "components/button/button";

// interface IProps {
// }

const CartDropDown = () => {
    const cartItems = useRecoilValue(CartItems);
    const history = useHistory();

    const goToCheckout = () => {
        // dispatch(setCartIconToggle());
        history.push('/checkout');
    };

    return (
        <CartDropdown>
            {
                cartItems.length > 0 ?
                    <>
                    <CartItemsWrapper>
                        {
                            cartItems.map((item: any) => {
                                return <CartItem key={item.id} {...item} />
                            })
                        }
                    </CartItemsWrapper>
                    <Button onClick={goToCheckout}>Go To CHECKOUT</Button>
                    </> :
                    <div className='cart-items'>
                       <span className='empty-message'>
                            Your Cart is empty
                       </span>
                    </div>
            }
        </CartDropdown>
    );
};

export default CartDropDown;