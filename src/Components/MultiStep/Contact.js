import React from "react";
import Stepping from "./Stepping"

import ItemForm from "./ItemForm";

const Contact = ({ userInfo, handleChange, navigation }) => {
    const { phoneNumber, email } = userInfo;

    const { previous, next } = navigation;

    return (
        <>
            <h1 className="followSteps">Please fill out your shipping information</h1>
            <div className="form">
                <Stepping colorCode={3} />

                <div className="inputFields">
                    <h3>Contact Information </h3>
                    <ItemForm className="multistepInputs" label="Phone Number" name="phoneNumber" value={phoneNumber} onChange={e => handleChange(e)} />
                    <ItemForm className="multistepInputs" label="E-mail" name="email" value={email} onChange={e => handleChange(e)} />
                </div>
                <div className="shippingPaymentButtonWrapper">
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            </div></>
    );
};

export default Contact;
