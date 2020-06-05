import React, { useState } from "react";
import signinimage from "../../assets/images/signin-up/signin.png";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addUserData } from '../../Redux/userData/userDataActions'
import { Link } from "react-router-dom";
import "./signinup.styles.scss"
import logo from "../../assets/gameShopLogo.png"
import google from "../../assets/images/signin-up/googleIcon.png"

const Signin = ({ addUserData }) => {
  //console.log(` Add user data function `, addUserData)
  const [signinStatus, setsigninStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  const [adminRedirect, setRedirect] = useState(false)
  //const [state, setstate] = useState("")
  //console.log("signinstatus", signinStatus);

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", { email, pass })
      .then(res => {
        //console.log(`boramanga submi`, res)
        if (res.data.admin) {
          setRedirect(true)
        }
        if (res.data.token) {
          //console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          setsigninStatus(true);
          addUserData(res.data)
        } else {
          localStorage.setItem("token", "");
          setWrong(true);
        }
      });
  };
  //Another way to use with one Hook
  //setstate(prevstate=>({
  //  ...prevstate,
  //  [e.target.value]:e.target.value
  //})
  if (signinStatus) {
    return <Redirect to="/" />;

  } else if (adminRedirect) {

    return <Redirect to="/admin" />;

  }
  else {
    return (
      <div className="signinupWrapper">
        <section className="signin">
          <div className="container">
            <div >
              <div className="signin-image">
                <figure>
                  <img src={signinimage} className="signinimage" alt="sign in" />
                </figure>

              </div>

              <div className="signin-form">
                <div  className="logoWrapped" >
                  <Link to="/">
                  <img src={logo} className="logo" alt="logo" />
                  </Link>
                </div>
                <h2 className="form-title">SIGN IN</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="login-form"
                  onSubmit={e => submitHandler(e)}
                >
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                    autoComplete="off"
                      type="email"
                      name="email"
                      className="inputFields"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
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
                  {wrong ? (
                    <small style={{ color: "red" }}>
                      Wrong password or username
                    </small>
                  ) : null}
                  {/*                   <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div> */}
                  <div className="form-group form-button">
                    <input
                    
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Sign In Now"
                    />
                  </div>
                </form>
                <div className="social-login" >
                  <div className="googleLink">

                    <a href="http://localhost:5000/auth/google" ><img src={google} className="googleIcon" alt="googleIcon" />Sign In With Google </a>
                  </div>

                </div>
                <div className="createAccount">
                <Link to="signup" className="signup-image-link">
                  Or Create an account
                </Link>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return { addUserData: userData => dispatch(addUserData(userData)) }

}


export default connect(null, mapDispatchToProps)(Signin);
