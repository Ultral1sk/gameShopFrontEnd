import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NewsLSideCards from '../../Components/NewsLCard/NewsLSideCards'
import Header from "../../Components/NavbarHeader/Header"
import { fetchGames } from '../../Redux/games/gameActions'
import Loading from '../../Components/Loading/Loading'
import BestsellerNew from "../../Components/BestsellerNew/BestsellerNew"
import DummyCardsWrapper from '../../Components/DummyNewsCards/DummyCardsWrapper'
import axios from "axios"
import { addUserData } from '../../Redux/userData/userDataActions'
import { NewsLetter } from '../../Components/NewsLetter/NewsLetter'
import CookieConsent from "react-cookie-consent";


const LandingPage = ({ gamesData, fetchGames, addUserData, history, match }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    //console.log("is admin landing paGE", isAdmin)
    const dummyData = gamesData.games[0] ? gamesData.games.slice(0, 8) : null
    const dummyData2 = gamesData.games[0] ? gamesData.games.slice(9, 17) : null
    // console.log("token", match.params)
    const tokenCheck = (token) => {
        axios.post(`http://localhost:5000/api/auth/token`, { token }).then(res => {
            //console.log(`user data frontend after google login`, res.data.message.name);
            //console.log("searchin adminnn", res.data.message)
            res.data.message.admin ? setIsAdmin(true) : setIsAdmin(false)
            addUserData(res.data.message)
        })
    }
    useEffect(() => {
        fetchGames();
        localStorage.setItem("boughtProduct", JSON.stringify({ cartItems: [] }))
        // console.log("inside useeffect match params token", match.params.token)
        const localToken = localStorage.getItem('token')
        const tokenToCheck = match.params.token || localToken
        tokenCheck(tokenToCheck)
        localStorage.setItem("token", tokenToCheck)
    }, [])

    /*     const storeCardComponent = gamesData.games[0] ? gamesData.games.map((item, index) => {
            return <StoreCard gamesData={item} history={history} key={index} admin={isAdmin} />
        }) : null */

    return gamesData.loading ? <Loading /> : gamesData.error ? (<h2>{gamesData.error}</h2>)
        : (<>
            <div className="ladingPageBg">
                <Header />
                <div className="gameStoreTitle" >
                    <h2>Newly Released</h2>
                    <h2 style={{ color: 'gray' }}> Games</h2>
                </div>
                {gamesData.games[0] ? <div><DummyCardsWrapper games={dummyData} history={history} admin={isAdmin} /></div> : null}
                {/* {gamesData.games[0] ? <div className="container mt-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>{storeCardComponent}</div> : null} */}
                <NewsLSideCards />
                <BestsellerNew />
                {/* <BestsellersWrapper /> */}
                <div className="gameStoreTitle">
                    <h2>Most Wishlisted</h2>
                    <h2 style={{ color: 'gray' }}>Games</h2>
                </div>
                {gamesData.games[0] ? <div><DummyCardsWrapper games={dummyData2} history={history} admin={isAdmin} /></div> : null}
                <NewsLetter />
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Continue"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                Welcome to GameShop! This is a student learning project. If there is any content irregularities please do not hesitate to <a style={{ textDecoration: "none", color: "#DA7E7C" }} href="mailto:duesseldorf@digitalcareerinstitute.org"> contact</a> us. See data protection info <a style={{ textDecoration: "none", color: "#DA7E7C" }} href="/dataprotection"> here.</a>
            </CookieConsent>
        </>
        )
}

const mapStateToProps = (state) => {
    return { gamesData: state.games }
}

const mapDispatchToProps = (dispatch) => {

    return {
        fetchGames: () => dispatch(fetchGames()),
        addUserData: userData => dispatch(addUserData(userData))
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)
