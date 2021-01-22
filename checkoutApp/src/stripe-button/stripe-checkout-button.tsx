import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

interface Props {
    price: number;
    callBackFn: (arg: string) => void
}
const StripeCheckoutButton = ({ price, callBackFn }: Props) => {
    const priceForStripe = price * 100;
    const onToken = (token: string) => {
        axios({
            url: 'http://localhost:5050/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(() => {
            callBackFn('success');
        }).catch(() => {
            callBackFn('error')
        });
    };

    return (
        // @ts-ignore
       <StripeCheckout
           name='Top Shopping'
           description={`Your total is $${price}`}
           lable='Pay Now'
           billingAddress={true}
           shippingAddress={true}
           image=''
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
       />
   );
};

export default StripeCheckoutButton;