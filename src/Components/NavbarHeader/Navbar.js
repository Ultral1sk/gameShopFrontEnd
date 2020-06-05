import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Collapse, Navbar, NavbarBrand, Nav } from 'reactstrap';
import axios from 'axios'
import { fetchGames } from '../../Redux/games/gameActions'
import { addUserData } from '../../Redux/userData/userDataActions'
import logo from "../../assets/gameShopLogo.png"
import playstationLOGO from '../../assets/backgroundImages/playstation.png'
import nintendoLOGO from '../../assets/backgroundImages/nintendo.png'
import xboxLOGO from '../../assets/backgroundImages/xbox.png'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(true);
  const [totalQuant, setTotalQuant] = useState(0)
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  var cartitems = props.cartitems
  var addUserData = props.addUserData
  var gamesData = props.games
  //console.log("coming from navbar", cartitems)
  const username = props.userData.userData.name || props.userData.userData.username
  const tokenCheck = (token) => {
    axios.post(`http://localhost:5000/api/auth/token`, { token }).then(res => {
      //console.log(`user data frontend after google login`, res.data.message);
      addUserData(res.data.message)
    })
  }
  useEffect(() => {

    const localToken = localStorage.getItem('token')
    const tokenToCheck = localToken
    tokenCheck(tokenToCheck)
    localStorage.setItem("token", tokenToCheck)
    if (cartitems.length !== 0 && Object.values(cartitems)[0] != undefined) {
      //console.log("navbar cart quantity1 trueeeeeeeeeeeeee")
      var totalQuantity = 0;
      Object.values(cartitems)[0].map((cart) => {
        //console.log("navbar cart quantity3333", cart.quantity)
        totalQuantity += cart.quantity
        return totalQuantity
      })
      setTotalQuant(totalQuantity)
    }
    //Navbar background change with scroll
    const handleScroll = () => {
      const show = window.scrollY > 470
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [cartitems])

  const toggle = () => setIsOpen(!isOpen);
  const onMouseOverHandler = () => setHover(!true)
  /* const removeID = () => {
    const removeElement = document.querySelector('#active')

    onmouseover
  } */



  const tokenRemoval = () => {
    axios.get(`http://localhost:5000/logout`)
    localStorage.setItem("token", "")
    localStorage.setItem("boughtProduct", JSON.stringify({ cartItems: [] }))

  }


  return (
    <div>
      <Navbar className={navBackground ? "navbar_wrapper backgroundNormal" : "navbar_wrapper backgroundTrans"} static-top="true" expand="md" >
        <NavbarBrand className="text-light pl-2" href="/"><img className="gameShopLogo" src={logo} alt="Game Shop Logo" /></NavbarBrand>
        <MenuIcon className="hamburger_icon pr-2" fontSize="large" onClick={toggle} />
        <Collapse text-center="true" isOpen={isOpen} navbar>
          <Nav className="mr-auto colpasedBackground text-light" navbar>
            <Nav className="nonColapsedWrapper">
              <div className="nonColapsedInnerWrapper">
                <Link to="/" id={hover ? 'activate' : ''} className="swipe-fill swipe-fill--up" >HOME</Link>
                <Link to="/news" onMouseOver={onMouseOverHandler} className="swipe-fill swipe-fill--up ">NEWS</Link>
                <Link to="/store" className="swipe-fill swipe-fill--up">STORE</Link>
                {/* DROPDOWN PART */}
                <div className="dropdown">
                  <Link to="/platforms" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle swipe-fill swipe-fill--up ">PLATFORMS</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link data={gamesData} className="dropdown-item d-flex justify-content-between playstationWrapper" to="/playstation"><span className="pt-2  mr-3 playstation">Playstation</span> <span ><img className="playstationIcon" src={playstationLOGO} alt="playstation" /></span></Link>
                    <Link data={gamesData} className="dropdown-item d-flex justify-content-between nintendoWrapper" to="/nintendo"><span className="pt-2  mr-3 nintendo">Nintendo</span> <span><img src={nintendoLOGO} alt="nintendo" /></span></Link>
                    <Link data={gamesData} className="dropdown-item d-flex justify-content-between xboxWrapper" to="/xbox"><span className="pt-2 mr-3 xbox">XBOX</span> <span><img src={xboxLOGO} alt="xbox" /></span></Link>
                  </div>
                </div>
                {/* DROPDOWN PART */}

                <Link to="/support" className="swipe-fill swipe-fill--up">SUPPORT</Link>
                <Link to="/search" className="swipe-fill swipe-fill--up">SEARCH</Link>
              </div>
              <ul className="rightNavPart">
                {/* <NavItem className="pl-3 pr-2">
                <img style={{ border: '2px solid red', borderRadius: '50%' }} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="Avatar" className="md-avatar rounded-circle" />
              </NavItem> */}
                {username ? <a href="/accountpage" style={{ marginLeft: "5px" }} className="welcomesignInOut" data-toggle="tooltip" data-placement="bottom" title="Go to Account Page">WELCOME {username.toUpperCase()}!!</a> : null}
                <Link to="/checkout" style={{ color: "white" }} data-toggle="tooltip" data-placement="bottom" title="Proceed to Checkout" className="shoppingCartItem"><ShoppingCartIcon /><span className='badge badge-warning' id='lblCartCount'>{totalQuant} </span></Link>
                {props.userData.userData._id ? <a href="http://localhost:5000/logout" onClick={tokenRemoval} className="welcomesignInOut">Sign Out</a> : <a className="welcomesignInOut" href="http://localhost:3000/signin" >Sign In</a>}
              </ul>
            </Nav>
          </Nav>
        </Collapse>
      </Navbar>
      {props.userData.userData.admin ? <Link to="/admin" className="admindashboard">ADMIN DASHBOARD</Link> : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    cartitems: state.carts,
    games: state.games

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    addUserData: userData => dispatch(addUserData(userData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Example);
