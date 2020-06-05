import React from "react";
import StripeCheckoutButton from "../../Components/CheckoutButton/CheckoutButton"
import Deadpool from "../../assets/images/deadpoolheart.png"
const Submit = ({ navigation, userInfo, price }) => {
    const {
        name,
        postCode,
        email
    } = userInfo;
    return (
        <div>

            <h3>Thank you for choosing GameShop</h3>
            <img style={{ width: "500px" }} src={Deadpool} alt="deadpool heart" />
            <div className="stripeCheckout">
                <StripeCheckoutButton name={name} email={email} postCode={postCode} price={price} />
            </div>
        </div>
    );
};

export default Submit;
