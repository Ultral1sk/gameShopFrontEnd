import React from 'react'
import MultiStepForm from '../../Components/MultiStep/MultiStepForm'
import "./shippingPaymentSteps.scss"


const ShippingPaymentSteps = (props) => {
    //console.log("shippping payment", props.location.state.toFixed(2))
    const accumulatedPrice = props.location.state.toFixed(2)
    return (
        <div className="shippingPaymentSteps">
            <MultiStepForm price={accumulatedPrice} />
        </div>
    )
}
export default ShippingPaymentSteps
