import React from 'react'
import StoreFilter from '../../Components/StoreFilter/StoreFilter'
import { useState, useEffect } from 'react'
import { connect } from "react-redux"
import StoreCard from '../../Components/StoreCard/StoreCard'
import { fetchGames } from '../../Redux/games/gameActions'
import axios from "axios"
import brush from "../../assets/backgroundImages/brush.png"

import "./StorePage.scss"

const StorePage = ({ fetchGames, gamesData, history, match }) => {


    const [games, setGames] = useState(gamesData.games || [])
    const [filterCombined, setFilterCombined] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [visible, setVisible] = useState(6)

    const tokenCheck = (token) => {
        axios.post(`http://localhost:5000/api/auth/token`, { token }).then(res => {
            console.log(`user data frontend after google login`, res.data.message.name);
            res.data.message.admin ? setIsAdmin(true) : setIsAdmin(false)
        })
    }
    useEffect(() => {
        fetchGames();
        const localToken = localStorage.getItem('token')
        const tokenToCheck = match.params.token || localToken
        tokenCheck(tokenToCheck)
    }, [fetchGames])

    setTimeout(() => {
        setGames(gamesData.games)
    }, 5);


    //console.log(`checking from storepage state`, gamesData)
    const convertingCheckBoxStateToArray = (checkboxState) => {
        var checkboxArray = []
        for (const key in checkboxState) {
            if (checkboxState[key] === true) {
                checkboxArray.push(key)
            }
        }
        return checkboxArray
    }



    const filterHandler = async (genres, platforms) => {
        const newGenres = convertingCheckBoxStateToArray(genres).filter(f => f.toUpperCase())
        const newPlatforms = convertingCheckBoxStateToArray(platforms).filter(f => f.toUpperCase())


        var filteredForPlatforms = newPlatforms.length === 0 ? games : await games.filter((game) => {
            let isIncluded = false;
            game.platform.forEach(platformThatGameHas => { if (newPlatforms.includes(platformThatGameHas.toUpperCase())) isIncluded = true });
            return isIncluded;
        });
        //console.log(`filteredPlatforms`, filteredForPlatforms, `NewPlatforms`, newPlatforms)
        var filteredForGenres = newGenres.length === 0 ? filteredForPlatforms : await filteredForPlatforms.filter((game) => {
            return game.genre.reduce((isIncluded, genreThatGameHas) => isIncluded || newGenres.includes(genreThatGameHas.toUpperCase()), false)
        });
        //console.log(`filteredForGenres`, filteredForGenres, `newGenres`, newGenres)
        setFilterCombined(filteredForGenres);
        setVisible(6)

    }

    const resetFilter = () => {
        setFilterCombined(gamesData.games)
        setVisible(6)
    }
    var storeCards = filterCombined ? filterCombined.slice(-visible, games.length).reverse().map((item, index) => {
        return <StoreCard gamesData={item} history={history} key={index} admin={isAdmin} />

    }) : Array.isArray(games) ? games.slice(-visible, games.length).reverse().map((item, index) => {
        return <StoreCard gamesData={item} history={history} key={index} admin={isAdmin} />

    }) : null
    //console.log(`storecards log`, storeCards)
    //console.log(`FilterCombined out`, typeof filterCombined)
    return (
        <div className="storePageWrapper">
            <div className="container">
                <div className="titleWrapper">
                    <img className="brushImage" src={brush} alt="" />
                    <div className="newspageTitles">Store</div>
                </div>
                <StoreFilter resetFilter={resetFilter} filterHandler={filterHandler} />
                {storeCards == undefined || storeCards.length < 1 ? <h1 style={{ color: "white", textAlign: "center", height: '50vh' }}>No results</h1> :
                    <><div className="storeCards">
                        {storeCards}
                    </div>
                        <div className="load-more">
                            <button onClick={() => setVisible(visible + 6)} type="button" className="btn" >Load more</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { gamesData: state.games }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(fetchGames()),
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(StorePage)