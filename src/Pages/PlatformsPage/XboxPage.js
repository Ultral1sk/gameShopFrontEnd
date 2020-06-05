import React, { useEffect, useState } from 'react'
import { fetchGames } from '../../Redux/games/gameActions'
import { connect } from 'react-redux'
import xboxTextLogo from '../../assets/backgroundImages/xboxLogo.png'
import xbox from '../../assets/backgroundImages/xboxBox.png'
import xboxController from '../../assets/backgroundImages/xboxController.png'
import xboxHeadset from '../../assets/backgroundImages/xboxHeadset.png'
import PlatformsViewModal from './PlatformsViewModal';


const XboxPage = ({ gamesData, fetchGames }) => {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetchGames()

    }, [fetchGames])
    setTimeout(() => {
        setstate(gamesData.games)
    }, 200);

    // const dataLooper = (arr) => Array.from(arr).map(dataArray => <div className="pr-1 pl-1" >{dataArray.charAt(0).toUpperCase() + dataArray.slice(1)}</div>)


    //console.log(state)
    const playStationCards = Array.isArray(state) ? state.filter(game => game.platform.includes("XBOX")).map((game, id) => {
        return (

            <div className="testWrapper" key={id}>

                <div className="leftRightWrapper">
                    <div className="leftContainer xbox">
                        <div className="rightContainer" style={{ backgroundImage: `url(http://localhost:5000/gamesimages/${game.images[0]})` }} >

                        </div>
                        <div className="leftWrapperTXT xboxLeftTXTWrapper">
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
                <img className="text-white  ml-5" src={xboxTextLogo} height="180px" width="30%" alt="xbox" />
            </div>
            <div className="cardWrapper pt-5">

                {playStationCards}
            </div>
            <div className="cardTitle text-white text-center">
                <h2>
                    Latest XBox Release
                    </h2>
            </div>
            <div className="d-flex justify-content-around flex-wrap">

                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>

                    <div className="cardImgWrapper xboxBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">XBOX ONE</h3>
                        </div>
                        <img src={xbox} alt="xbox" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body xboxDescription">
                        <p className="card-text ">The Xbox One is an eighth-generation home video game console developed by Microsoft. </p>
                        <div>
                            <a type="button" class="btn btn-success" href="https://www.xbox.com/en-US/consoles/all-consoles">See More</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper xboxBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">XBOX Controller</h3>
                        </div>
                        <img src={xboxController} alt="xbox" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body xboxDescription">
                        <p className="card-text ">Textured Grip | Button Mapping | 3.5mm stereo headset jack | Bluetooth® technology</p>
                        <div>
                            <a type="button" class="btn btn-success" href="https://www.xbox.com/en-US/consoles/all-consoles">See More</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper xboxBG">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerNintendoTitle">XBOX HEADSET</h3>
                        </div>
                        <img src={xboxHeadset} alt="xbox" style={{ height: "22rem" }} />

                    </div>
                    <div className="card-body xboxDescription">
                        <p className="card-text ">This headset combines integrated Xbox Wireless with Bluetooth audio, ClearCast bidirectional microphone, and award-winning Arctis sound to make it the premium choice for gamers.</p>
                        <div>
                            <a type="button" class="btn btn-success" href="https://www.xbox.com/en-US/consoles/all-consoles">See More</a>
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
)(React.memo(XboxPage))
