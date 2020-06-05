import React from 'react'
import "./ErrorPage.scss"
import yoda from "../../assets/errorimages/yoda.png"
const ErrorPage = () => {
    return (
        <div className="errorpage">
            <h1 className="errortext">Oops, page not found!</h1>
            <img className="errorimage" src={yoda} alt="yoda" />
        </div>
    )
}

export default ErrorPage
