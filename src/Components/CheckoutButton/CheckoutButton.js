import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/gameShopLogo.png"

const StripeCheckoutButton = ({ price, name, email, postCode }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_G7cv8z20mhdJxnwmUvR6rpL900HY1ACm8X";
    const onToken = token => {
        //console.log(token);
        localStorage.setItem("boughtProduct", JSON.stringify({ cartItems: [] }))
        setTimeout(() => {
            window.location.href = "http://localhost:3000/"
        }, 500);
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name={name}
            email={email}
            zipCode={parseInt(postCode)}
            allowRememberMe={false}
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;
