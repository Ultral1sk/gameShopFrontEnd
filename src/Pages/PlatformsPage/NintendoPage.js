import React, { useEffect, useState } from 'react'
import { fetchGames } from '../../Redux/games/gameActions'
import { connect } from 'react-redux'
import nintendo from '../../assets/nintendotxtlogo.png'
import nintendobox from '../../assets/backgroundImages/nintendobox.png'
import Controller from "../../assets/backgroundImages/nintendoWireless.png"
import Charging from "../../assets/backgroundImages/nintendoJoyCon.png"
import PlatformsViewModal from './PlatformsViewModal';


const NintentoPage = ({ gamesData, fetchGames }) => {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetchGames()

    }, [fetchGames])
    setTimeout(() => {
        setstate(gamesData.games)
    }, 200);

    // const dataLooper = (arr) => Array.from(arr).map(dataArray => <div className="pr-1 pl-1" >{dataArray.charAt(0).toUpperCase() + dataArray.slice(1)}</div>)


    //console.log(state)
    const playStationCards = Array.isArray(state) ? state.filter(game => game.platform.includes("NINTENDO")).map((game, id) => {
        return (
            <div className="testWrapper" key={id} >
                <div className="leftRightWrapper">
                    <div className="leftContainer nintendo">
                        <div className="rightContainer" style={{ backgroundImage: `url(http://localhost:5000/gamesimages/${game.images[0]})` }} />
                        <div className="leftWrapperTXT nintendoLeftTXTWrapper">
                            {/* <img className="playStationIcon" src={playstation} height="200px" width="200px" /> */}
                               <b style={{ width: "100px" }}>
                                {game.name.toUpperCase()}
                            </b>

                            <PlatformsViewModal data={game} />

                        </div>
                    </div>
                </div>
            </div>

        )

    }) : null
    //console.log(`filter arr`, playStationCards)
    // })
    //     : null


    return (
        <div className="text-center pt-5">
            <div className="cardBG text-center text-white mt-5 w-100 h-100  pt-5">
                <img className="text-white  ml-5" src={nintendo} height="150px" width="40%" alt="nintendo" />
            </div>
            <div className="cardWrapper pt-5">
                {playStationCards}
            </div>
            <div className="cardTitle text-white text-center">
                <h2>
                    Latest Nintendo Release
                    </h2>
            </div>
            <div className="d-flex justify-content-around">
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper nintendoBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">Nintendo Switch</h3>
                        </div>
                        <img src={nintendobox} alt="nintendo" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body">
                        <p className="card-text">Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.</p>
                        <div>
                            <a type="button" class="btn btn-danger" href="https://www.nintendo.com/switch/buy-now/accessories/">See More</a>


                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper nintendoBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">Joy‑Con Controller</h3>
                        </div>
                        <img src={Controller} alt="nintendo" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body">
                        <p className="card-text">Joy Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.</p>
                        <div>
                            <a type="button" class="btn btn-danger" href="https://www.nintendo.com/switch/buy-now/accessories/">See More</a>

                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper nintendoBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">Joy-Con Charging </h3>
                        </div>
                        <img src={Charging} alt="nintendo" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body">
                        <p className="card-text">Lets you keep playing while you’re charging your Joy‑Con, so you don’t have to miss a minute.</p>
                        <div>
                            <a type="button" class="btn btn-danger" href="https://www.nintendo.com/switch/buy-now/accessories/">See More</a>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { gamesData: state.games }

}

const mapDispatchToProps = (dispatch) => {
    return { fetchGames: () => dispatch(fetchGames()) }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(NintentoPage))
