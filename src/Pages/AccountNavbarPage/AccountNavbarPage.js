import React, { useEffect, useState } from 'react'
import "./AccountNavbarPage.scss"
import { Link, Route } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import AccountContactFormPage from '../../Components/AccountContactFormPage/AccountContactFormPage'
import AccountFAskedQuestions from '../../Components/AccountFAskedQuestions/AccountFAskedQuestions'
import axios from 'axios'

const AccountNavbarPage = () => {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({ id: '', name: '', email: '', password: '', phoneNumber: null, address: '', city: '', postCode: null, country: '' })
    const [toggleDisabled, setToggleDisabled] = useState(true)
    const [toggleContainer, setToggleContainer] = useState(true)

    useEffect(() => {
        var token = localStorage.getItem("token")
        //    console.log(`we have the token in usereffect`,token)
        if (token) {
            axios.get(`http://localhost:5000/api/auth/userData`, {
                headers: { "x-auth-token": token }

            }).then(res => {
                if (res.data) {
                    // console.log(`bitch is comming from fetchuserddata BE res`,res.data.message);
                    const { _id, name, email, phoneNumber, address, city, postCode, country } = res.data.message;
                    setUserInfo({ id: _id, name, email, phoneNumber, address, city, postCode, country })
                }
                else {
                    const error = new Error(res.error);
                    throw error;
                }
            });

        } else { console.log(`User Unauthorized`) }
    }, [])
    const clickHandler = () => {
        setToggleContainer(false)
    }
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo(prevstate => ({
            ...prevstate,
            [name]: value
        }))
    }

    const saveDataHandler = (e) => {
        e.preventDefault();
        var token = localStorage.getItem("token")
        const { name, email, phoneNumber, address, city, postCode, country } = userInfo
        axios.post(`http://localhost:5000/api/auth/updateUserData`, { name, email, phoneNumber, address, city, postCode, country }, {
            headers: { "x-auth-token": token },

        }).then((res) => {

            const { name, email, phoneNumber, address, city, postCode, country } = res.data.message
            const postcodeParsed = parseInt(postCode)
            //console.log(`status comming from saveHandler after post reqest`, typeof postcodeParsed);
            setUserInfo({ name, email, phoneNumber, address, city, postcodeParsed, country })
            // an alternative needed for later
            window.location.reload(false)//That makes us problem redux state resets and there is no user data inside userdata redux
        })
        setToggleDisabled(true)
    }
    const toggleHandler = (e) => {
        e.preventDefault();
        setToggleDisabled(!toggleDisabled)
        //console.log(`togglestate`, toggleDisabled)
    }
    return (<>
        {
            toggleContainer ?
                <div className="toPersonalInformationWrapperOn">
                    <div>
                        <h2 className="text-white">Hello {userInfo.name} </h2>
                        <p className="text-white">settings</p>
                        <Link onClick={clickHandler} to="/accountpage/personalInformation" className="text-white" >
                            <svg class="bi bi-gear-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
                            </svg>
                        </Link>
                    </div>

                </div>
                :
                <div className="sidenav_wrapper">
                    <div className="sidenav">

                        <Link to="/accountpage/personalInformation">Personal Information</Link>
                        <Link to="/accountpage/address">Address</Link>
                        <Link to="/accountpage/contact">Contact</Link>
                        <Link to="/accountpage/faQuestions">Frequently asked questions</Link>
                    </div>
                    <div className="main">
                        <Route exact path="/accountpage/personalInformation">
                            <form onSubmit={saveDataHandler}  >
                                <h2>Personal Information</h2>

                                <div >
                                    <div >
                                        <TextField error className={classes.inputStyling} id="outlined-error" variant="outlined" label="Name" name="name" type="text" onChange={onChangeHandler} value={userInfo.name} disabled={toggleDisabled} />
                                    </div>
                                    <div >
                                        <TextField error className={classes.inputStyling} id="outlined-error" variant="outlined" label="Email" name="email" type="email" onChange={onChangeHandler} value={userInfo.email} disabled={toggleDisabled ? "disabled" : ""} />
                                    </div>
                                    <div>
                                        <TextField error className={classes.inputStyling} id="outlined-error" variant="outlined" label="Password" name="password" type="password" onChange={onChangeHandler} value={userInfo.password} disabled={toggleDisabled} />
                                    </div>
                                    <div>
                                        <TextField error className={classes.inputStyling} id="outlined-error" variant="outlined" label="Phone Number" name="phoneNumber" type="number" onChange={onChangeHandler} value={userInfo.phoneNumber} disabled={toggleDisabled} />
                                    </div>
                                    {
                                        toggleDisabled &&

                                        <Button onClick={toggleHandler} variant="contained" size="large" className={classes.buttonStyling} startIcon={<SaveIcon />}>
                                            Edit
                        </Button>
                                    }

                                    {!toggleDisabled &&

                                        <Button variant="contained" size="large" type="submit" className={classes.saveButtonStyling} startIcon={<SaveIcon />}>
                                            save
                        </Button>
                                    }
                                </div>
                            </form>
                        </Route>
                        <Route exact path="/accountpage/address">
                            <form onSubmit={saveDataHandler}  >
                                <h2>Address</h2>
                                <div>
                                    <div className="text-white" >
                                        <TextField error className={classes.inputStyling} onChange={onChangeHandler} id="outlined-error" variant="outlined" label="Street / No." type="text" name="address" value={userInfo.address} disabled={toggleDisabled} />
                                    </div>
                                    <div >
                                        <TextField error className={classes.inputStyling} onChange={onChangeHandler} id="outlined-error" variant="outlined" label="City" type="text" name="city" value={userInfo.city} disabled={toggleDisabled} />
                                    </div>
                                    <div >
                                        <TextField error className={classes.inputStyling} onChange={onChangeHandler} id="outlined-error" variant="outlined" label="Post Code" type="number" name="postCode" value={userInfo.postCode} disabled={toggleDisabled} />
                                    </div>
                                    <div >
                                        <TextField error className={classes.inputStyling} onChange={onChangeHandler} id="outlined-error" variant="outlined" label="Country" type="text" name="country" value={userInfo.country} disabled={toggleDisabled} />
                                    </div>

                                    {
                                        toggleDisabled &&

                                        <Button onClick={toggleHandler} variant="contained" size="large" className={classes.buttonStyling} startIcon={<SaveIcon />}>
                                            Edit
                                </Button>
                                    }

                                    {!toggleDisabled &&

                                        <Button variant="contained" size="large" type="submit" className={classes.saveButtonStyling} startIcon={<SaveIcon />}>
                                            save
                                </Button>
                                    }
                                </div>
                            </form>
                        </Route>
                        <Route exact path="/accountpage/contact">
                            <div>
                                <AccountContactFormPage />
                            </div>
                        </Route>
                        <Route exact path="/accountpage/faQuestions">
                            <h2>Frequently asked questions</h2>
                            <AccountFAskedQuestions />
                        </Route>
                    </div>
                </div>
        }
    </>
    )
}
export default AccountNavbarPage
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': { margin: theme.spacing(1), width: '25ch', },

    },
    disabledStyling: {
        "&:disabled": {
            color: 'red'
        }
    },
    inputStyling: {
        color: 'white',
        margin: '1rem 0',
    },
    buttonStyling: {
        backgroundColor: 'rgba(255, 68, 68, 0.897)',
        color: 'white',
        padding: '0.5rem 4rem',
        margin: '1rem 1rem',

        "&:hover": {
            backgroundColor: 'rgba(255, 68, 68, 0.897)',

        }
    },
    saveButtonStyling: {
        backgroundColor: 'green',
        color: 'white',
        padding: '0.5rem 4rem',
        margin: '1rem 1rem',
    }
}));