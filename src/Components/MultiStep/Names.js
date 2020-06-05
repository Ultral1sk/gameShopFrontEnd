import React from "react";
import ItemForm from "./ItemForm";
import Stepping from "./Stepping"

const Names = ({ userInfo, handleChange, navigation }) => {
    const { name } = userInfo;
    const { next } = navigation;

    return (<>
        <h1 className="followSteps">Please fill out your shipping information</h1>
        <div className="form">
            <Stepping />
            <div className="inputFields">
                <h3>Name for Shipping</h3>
                <ItemForm
                    label="Name"
                    name="name"
                    value={name}
                    onChange={e => handleChange(e)}
                    className="multistepInputs"
                />
            </div>
            <div className="shippingPaymentButtonWrapper">
                <button onClick={next}>Next</button>
            </div>
        </div></>
    );
};

export default Names;
