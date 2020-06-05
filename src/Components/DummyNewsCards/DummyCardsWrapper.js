import React from 'react'
import StoreCard from '../StoreCard/StoreCard'
const DummyCardsWrapper = (props) => {

    //console.log(`data comming from dummycards`,data.news)

    //console.log(`Dummy card wrappper data passed as props`,props)
    const admin = props.admin

    return (
        <>

            <div className="dummy_wrapper">
                <div className="container-fluid rowOne  d-flex justify-content-center alig-items-center flex-wrap">
                    <StoreCard gamesData={props.games[0]} history={props.history} admin={admin} />

                    <StoreCard gamesData={props.games[1]} history={props.history} admin={admin} />

                    <StoreCard gamesData={props.games[2]} history={props.history} admin={admin} />
                    <StoreCard gamesData={props.games[3]} history={props.history} admin={admin} />
                </div>

                <div className="container-fluid rowTwo  d-xl-flex d-md-none d-xs-none  justify-content-center">
                    <StoreCard gamesData={props.games[4]} history={props.history} admin={admin} />

                    <StoreCard gamesData={props.games[5]} history={props.history} admin={admin} />
                    <StoreCard gamesData={props.games[6]} history={props.history} admin={admin} />

                    <StoreCard gamesData={props.games[7]} history={props.history} admin={admin} />

                </div>

            </div>

        </>
    )
}

export default DummyCardsWrapper
