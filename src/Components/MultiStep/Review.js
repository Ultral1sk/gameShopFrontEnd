import React from "react";
import Stepping from "./Stepping"

const Review = ({ handleChange, userInfo, navigation }) => {
    const {
        name,
        address,
        city,
        postCode,
        country,
        phoneNumber,
        email
    } = userInfo;
    const { go } = navigation;

    return (
        <>
            <h1 className="followSteps">Please fill out your shipping information</h1>
            <div className="form confirmShippingInfoWrapper">
                <Stepping colorCode={4} />

                <h3>Confirm Shipping Information</h3>
                <div className="reviewLine">
                    <h4>
                        Shipping to Ms/Mr
                    </h4>
                    <button onClick={() => go("names")}>Edit</button>
                </div>

                <h6>
                    {name ? `${name}` : null}
                </h6>
                <div className="reviewLine">
                    <h4>
                        Shipping to
            </h4>
                    <button onClick={() => go("address")}>Edit</button>
                </div>
                <h6>
                    {address ? `${address}` : null}
                </h6>
                <h6>
                    {city ? ` ${city}` : null}
                </h6>
                <h6>
                    {postCode ? `${postCode}` : null}
                </h6><h6>
                    {country ? `${country}` : null}
                </h6>
                <div className="reviewLine">
                    <h4>
                        Contacting by
            </h4>
                    <button onClick={() => go("contact")}>Edit</button>
                </div>
                <h6>
                    {phoneNumber ? `${phoneNumber}` : null}
                </h6><h6>
                    {email ? `${email}` : null}
                </h6>
                <div className="divButton shippingPaymentButtonWrapper">
                    <button className="allDataCorrectButton" onClick={() => go("submit")}>All Data is Correct!</button>
                </div>
            </div></>
    );
};

export default Review;
