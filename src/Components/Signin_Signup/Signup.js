import React, { useState } from "react";
import signupimage1 from "../../assets/images/signin-up/moto.png";
/* import signupimage2 from "../../assets/images/signin-up/motorRight.png"; */
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../../assets/gameShopLogo.png"
import Modal from '@material-ui/core/Modal';
import { TermsAndServiceModal } from "../TermsAnsServiceModal/TermsAndServiceModal";
//import google from "../../assets/images/signin-up/googleIcon.png"


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailtaken, setemailtaken] = useState(false);
  const [signupsucess, setSignupsucess] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        pass,
        name
      })
      .then(res => {
        //console.log(res);
        if (res.data.status === "success") {
          setSignupsucess(true);
        } else {
          setemailtaken(true);
        }
      });
  };
  if (signupsucess) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <div className="signinupWrapper">
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-image">
                <figure>
                  <img src={signupimage1} className="signupimage1" alt="sign in" />
                </figure>
                {/*                 <figure>
                  <img src={signupimage2} className="signupimage2" alt="sign in" />
                </figure> */}
              </div>
              {/*  <div className="rightRamp"></div>
              <div className="leftRamp"></div> */}
              <div className="signup-form">
                <div className="logoWrapped" >

                  <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                  </Link>
                </div>
                <h2 className="form-title">SIGN UP</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={submitHandler}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="name"
                      id="name"
                      className="inputFields"
                      placeholder="Your Name"
                      value={name}
                      onChange={e => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      autoComplete="off"
                      type="email"
                      name="email"
                      className="inputFields"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  {emailtaken ? <small>Email is already taken</small> : null}
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      autoComplete="off"
                      type="password"
                      name="pass"
                      id="pass"
                      className="inputFields"
                      placeholder="Password"
                      value={pass}
                      onChange={e => {
                        setPass(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group agree_terms">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"

                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span style={{ flexGrow: "1" }}>
                        <span></span>
                      </span>
                      I agree in{" "}
                      <button type="button" className="term-service" onClick={handleOpen}>
                        Terms of service
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        <TermsAndServiceModal />
                      </Modal>
                      <div>

                      </div>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>

                </form>
                <Link to="signin" className="signin-image-link">
                  I am already member
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Signup;
