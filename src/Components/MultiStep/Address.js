import React from "react";
import ItemForm from "./ItemForm";
import Stepping from "./Stepping"


const Address = ({ userInfo, handleChange, navigation }) => {
    const { address, city, postCode, country } = userInfo;

    const { previous, next } = navigation;

    return (<>
        <h1 className="followSteps">Please fill out your shipping information</h1>
        <div className="form labeldiv">
            <Stepping colorCode={2} />
            <div className="inputFields">
                <h3>Shipping Address</h3>
                <ItemForm
                    label="Address"
                    name="address"
                    value={address}
                    onChange={e => handleChange(e)}
                    className="multistepInputs"
                />
                <ItemForm label="City" name="city" value={city} onChange={e => handleChange(e)} className="multistepInputs" />
                {/*    <StateDrop label="State" name="state" value={state} onChange={e => handleChange(e)} /> */}
                <ItemForm label="Post Code" name="postCode" value={postCode} onChange={e => handleChange(e)} className="multistepInputs" />
                <ItemForm label="Country" name="country" value={country} onChange={e => handleChange(e)} className="multistepInputs" />
            </div>
            <div className="shippingPaymentButtonWrapper">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div></>
    );
};

export default Address;