import React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage"
import Footer from './Components/Footer/Footer';
import AdminAdd from '../src/Pages/AdminAdd/AdminAdd'
import AdminEdit from '../src/Pages/AdminEditPage/AdminEdit'
import NewsPage from "./Pages/NewsPage/NewsPage"
import SignIn from "./Components/Signin_Signup/Signin"
import SignUp from "./Components/Signin_Signup/Signup"
import withAuth from "./Components/withAuth";
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import SearchPage from './Pages/SearchPage/SearchPage'
import Navbar from './Components/NavbarHeader/Navbar'
import StorePage from "./Pages/StorePage/StorePage"
import AccountNavbarPage from './Pages/AccountNavbarPage/AccountNavbarPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SupportPage from './Pages/SupportPage/SupportPage'
import Checkout from './Pages/CheckoutPage/Checkout';
import ShippingPaymentSteps from "./Components/ShippingPaymentSteps/ShippingPaymentSteps"
import PlaystationPage from './Pages/PlatformsPage/PlaystationPage';
import NintendoPage from './Pages/PlatformsPage/NintendoPage';
import XboxPage from './Pages/PlatformsPage/XboxPage';
import DataProtection from "./Pages/DataProtection/DataProtection"
import './App.scss';
function App() {
  const history = useHistory()
  return (<>

    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/auth/:token" component={LandingPage} />
      <Route exact path="/news" component={NewsPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/store" component={StorePage} />
      <Route exact path="/support" component={SupportPage} />
      <Route exact path="/playstation" component={PlaystationPage} />
      <Route exact path="/nintendo" component={NintendoPage} />
      <Route exact path="/xbox" component={XboxPage} />


      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/accountpage" component={AccountNavbarPage} />
      <Route path="/shippingpaymentsteps" component={ShippingPaymentSteps} />
      <Route path="/dataprotection" component={DataProtection} />
      <Route exact path="/admin/addgame" component={withAuth(AdminAdd, "admin")} />
      <Route exact path="/admin/editgame" component={withAuth(AdminEdit, "admin")} />
      <Route exact path="/admin" component={withAuth(AdminDashboard, "admin")} />
      <Route path="/" component={ErrorPage}></Route>

    </Switch>
    {
      history.location.pathname === `/` ||
        history.location.pathname === `/auth/:token` ||
        history.location.pathname === `/news` ||
        history.location.pathname === `/search` ||
        history.location.pathname === `/store` ||
        history.location.pathname === `/support` ||
        history.location.pathname === `/playstation`||
        history.location.pathname === `/nintendo`||
        history.location.pathname === `/xbox` 
        ? <Footer /> : null
    }

  </>
  )
}

export default App
