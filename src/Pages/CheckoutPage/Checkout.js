import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import "./checkout.scss"
import { clearCartItem, addCartItem, removeCartItem } from "../../Redux/cart/cartActions"

const Checkout = ({ cartitems, clearItem, addItem, removeItem }) => {
    const [modalToggle, setModalToggle] = useState(false)
    const history = useHistory()
    const data = cartitems.cartItems
    var itemPrice = 0
    var acculumatedPrice = 0
    var itemCardPrice = 0;
    var token = localStorage.getItem("token")

    console.log(`local storage token value`, token)

    // calculated total price
    Array.from(data).map((cart) => {
        const calculatedPrice = ((cart.price - (cart.price * cart.discount / 100)).toFixed(2))
        itemPrice = cart.quantity * calculatedPrice
        acculumatedPrice += itemPrice
        return acculumatedPrice;
    })


    // this function chekcs if there is a token before payment 
    // if there is a token it passes the incomming data from redux to the next page
    // if not a modal

    const historyPushPrice = (acculumatedPrice, token) => {
        if (localStorage.getItem("token", token)) {
            return history.push("/shippingpaymentsteps", acculumatedPrice)

        } else {
            return setModalToggle(true)

        }

    }
    const historyPushHome = () => {
        history.push("/store")

    }
    const checkoutItems = Array.from(data).map((cart) => {
        //console.log("inside checkout one cart item", cart);
        const calculatedPrice = ((cart.price - (cart.price * cart.discount / 100)).toFixed(2))
        // its calculating the price when buying one or more games
        itemCardPrice = cart.quantity * calculatedPrice

        return (
            <>
                {
                    modalToggle
                        ?
                        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered " role="document">
                                <div className="modal-content text-center modal-content-custom-styling">
                                    <div className="modal-header  ">
                                        <h5 className="modal-title  " id="exampleModalLongTitle">Login Required</h5>
                                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body text-center">
                                        To proceed with the purchase Login is required
                    </div>
                                    <div className="modal-footer">
                                        <a href="http://localhost:3000/signup" >Register</a>
                                        <a href="http://localhost:3000/signin">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>
                }
                <div className="checkout-item">
                    <div className="image-container">
                        <img src={`http://localhost:5000/gamesimages/${cart.images[0]}`} alt="item" />
                    </div>
                    <span className="name">{cart.name}</span>
                    <span className="quantity">
                        <div className="arrow" onClick={() => removeItem(cart)}>&#10094;</div>
                        <span className="value">{cart.quantity}</span>
                        <div className="arrow" onClick={() => addItem(cart)}>&#10095;</div>
                    </span>
                    <span className="price">{itemCardPrice.toFixed(2)}€</span>
                    <div className="remove-button" onClick={() => clearItem(cart)} >
                        <svg class="bi bi-trash" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </div>
                </div>
            </>
        )
    })
    return (<div className="containerCheckout">
        <div className="checkoutItemsWrapper">
            {checkoutItems[0] ? checkoutItems : <h1 style={{ color: "red" }}>Your Shopping Cart is Empty</h1>}
            {checkoutItems[0] ? <div className="total">
                TOTAL :{acculumatedPrice ? acculumatedPrice.toFixed(2) : null}
            </div> : null}
        </div>

        {checkoutItems[0] ? <button data-toggle="modal" data-target="#exampleModalCenter" onClick={() => historyPushPrice(acculumatedPrice, token)} className="proceedToPayment ">Proceed To Payment</button> : <button onClick={() => historyPushHome()} className="proceedToPayment">GO TO STORE</button>}


    </div>
    )
}


const mapStateToProps = (state) => {
    return { cartitems: state.carts }
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeCartItem(item))


});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)