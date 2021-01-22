import React, {useState} from "react";
import { CheckoutPage, CheckoutHeader, Total } from './checkout.style';
import { CartItems, CartTotal, ClearCart } from "Shell/Atoms";
import { useRecoilValue } from 'recoil';
import StripeCheckoutButton from '../stripe-button/stripe-checkout-button';
import CheckOutItems from '../checkoutItem/checkoutItem';
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";

type CartItems = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}
const CheckOut = () => {
    const cartItems = useRecoilValue<CartItems[]>(CartItems);
    const cartTotal: number = useRecoilValue(CartTotal) || 0;
    const clearCart = useSetRecoilState(ClearCart);
    const [toastClass, setToastClass] = useState('snackbar');

   const processPayment = (message: string) => {
       if (message === 'success') {
           setToastClass('snackbar show');
           // After 3 seconds, remove the show class from DIV
           setTimeout(() => {
               setToastClass('snackbar');
           }, 3000);
           clearCart('uid');
       } else {

       }
   }

   return (
       <CheckoutPage>
           {
               cartItems && cartItems.length > 0 ?
                   <>
                       <CheckoutHeader>
                           <div className='header-block'>
                               <span>Product</span>
                           </div>
                           <div className='header-block'>
                               <span>Description</span>
                           </div>
                           <div className='header-block'>
                               <span>Quantity</span>
                           </div>
                           <div className='header-block'>
                               <span>Price</span>
                           </div>
                           <div className='header-block'>
                               <span>Remove</span>
                           </div>
                       </CheckoutHeader>
                       {
                           cartItems.map((item: any) => {
                               return <CheckOutItems item={item} key={item.id}/>;
                           })
                       }
                       <Total className='total'>
                           <span>TotalL ${cartTotal}</span>
                       </Total>
                       <StripeCheckoutButton price={cartTotal} callBackFn={processPayment} />
                   </> :
                   <>
                       <div className={toastClass}>Thank you for shopping with us.</div>
                       <span className='empty-message'>
                           Your Cart is empty
                       </span>
                   </>
           }
       </CheckoutPage>
   );
};

export default CheckOut;