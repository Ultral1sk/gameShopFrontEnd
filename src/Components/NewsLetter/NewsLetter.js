import React, { useState } from 'react'
import "./NewsLetter.scss"
import wader from "../../assets/images/starwars.png"
import axios from 'axios'

export const NewsLetter = () => {

    const [successMsg, setSuccessMsg] = useState('NEWSLETTER')

    const submitHandler = (e) => {
        e.preventDefault();
        var email = document.getElementById("emailInput").value;

        axios.post('http://localhost:5000/newsletter', { email })
            .then(res => {
                if (res.status === 200) {
                    setSuccessMsg(<h2 className="errorMsg">{'EMAIL SENT'}</h2>)
                    setTimeout(() => {
                        setSuccessMsg('NEWSLETTER')
                        email = document.getElementById("emailInput").value = ''
                    }, 2000);
                } else {
                    return ""
                }

                console.log(`res comming from newsletter`, res)
            })
            .catch(err => {
                console.log(`err comming from newsletter`, err)
            })
        console.log(email)
    }


    return (
        <div className="NewsLetterWrapper">

            <div className="d-flex" style={{ width: "100%" }}>
                <div className="newsletterBGLeft">
                    <form onSubmit={submitHandler} className=" newsletterForm " >
                        <div className="">
                            <div className="newsletterWrapper">
                                <h2>{successMsg}</h2>
                                <p>SIGN UP FOR</p>
                            </div>
                            <div className="input-group mycustom">
                                <input autoComplete="off" type="email" id="emailInput" placeholder="Your Email" aria-describedby="inputGroupPrepend2" required />
                                <div className="input-group-prepend">
                                    <button type="submit" className="submitButton" id="inputGroupPrepend2">
                                        <svg className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="newsletterBGRight">
                </div>
            </div>

            <img src={wader} alt="wader" className="img3" />
        </div>

    )
}
