import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default function withAuth(ComponentToProtect, path) {


    return (props) => {
        const [loading, setLoading] = useState(true);
        const [redirect, setRedirect] = useState(false);
        useEffect(() => {
            //console.log('withauth called');

            axios
                .get(`http://localhost:5000/${path}`, {
                    headers: { "x-auth-token": localStorage.getItem("token") }
                })
                .then(res => {
                    //console.log("withAuth component", res.data.message.admin);
                    if (!res.data.message.admin) {
                        setRedirect(true);
                        //console.log("not admin")
                    }
                    if (res.data.message.admin) {
                        setLoading(false)
                        //console.log("admin")

                    }
                    if (res.status === 200) {
                        //console.log(res.data);

                        setLoading(false);
                    } else {
                        const error = new Error(res.error);
                        throw error;
                        //console.log("error in admin")

                    }
                })
                .catch(err => {
                    //console.log("error in catch admin")

                    setLoading(false);
                    setRedirect(true);
                });
        }, []);

        if (loading) {
            return null;
        }

        if (redirect) {
            return <Redirect to="/" />;
        }
        return <ComponentToProtect {...props} />;
    };
}
