import React, { useState, useEffect } from "react";
import { useStep } from "react-hooks-helper";
import axios from "axios"
import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";
import "./multistep.scss";

const steps = [
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" }
];

/* const defaultData = {
    name: "Jane Doe",
    address: "200 South Main St",
    city: "Anytown",
    //state: "CA",
    postCode: "90505",
    email: "email@domain.com",
    phoneNumber: "+61 4252 454 332",
    country: "Germany"
}; */

/* address: "200 South Main St"
city: "Anytown"
country: "Germany"
email: "email@domain.com"
name: "Jane Doe"
phoneNumber: "+61 4252 454 332"
postCode: "90505" */
/* 
name: "Bora Manga"
address: undefined
city: undefined
postCode: undefined 
email: undefined
phoneNumber: undefined
country: undefined
id: "5eaa9b390e29355030e28135"
*/
const MultiStepForm = ({ price }) => {
    const [userInfo, setUserInfo] = useState({ name: "", address: "", city: "", postCode: "", country: "", phoneNumber: "", email: "" })
    //const [formData, setForm] = useForm(userInfo);
    const handleChange = e => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };
    useEffect(() => {
        var token = localStorage.getItem("token")
        //    console.log(`we have the token in usereffect`,token)
        if (token) {
            axios.get(`http://localhost:5000/api/auth/userData`, {
                headers: { "x-auth-token": token }

            }).then(res => {
                if (res.data) {
                    setUserInfo(res.data.message)
                }
                else {
                    const error = new Error(res.error);
                    throw error;
                }
            });

        } else { console.log(`User Unauthorized`) }
    }, [])
    //console.log("user info", userInfo)
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { userInfo, handleChange, navigation, price };

    switch (id) {
        case "names":
            return <Names {...props} />;
        case "address":
            return <Address {...props} />;
        case "contact":
            return <Contact {...props} />;
        case "review":
            return <Review {...props} />;
        case "submit":
            return <Submit {...props} />;
        default:
            return null;
    }
};

export default MultiStepForm;
