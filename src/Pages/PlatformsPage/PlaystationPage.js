import React, { useEffect, useState } from 'react'
import { fetchGames } from '../../Redux/games/gameActions'
import { connect } from 'react-redux'
import playstationBG from '../../assets/sonystation.png'
import playstation3 from '../../assets/backgroundImages/ps4.png'
import playstationVR from '../../assets/backgroundImages/vr.png'
import playstationMotion from '../../assets/backgroundImages/motion.png'
import PlatformsViewModal from './PlatformsViewModal';

const PlaystationPage = ({ gamesData, fetchGames }) => {
    useEffect(() => {
        fetchGames()
    }, [fetchGames])
  

    // const dataLooper = (arr) => Array.from(arr).map(dataArray => <div className="pr-1 pl-1" >{dataArray.charAt(0).toUpperCase() + dataArray.slice(1)}</div>)

    const clickHandler = (data, id) => (data, id)

    console.log(gamesData)
    const playStationCards = Array.isArray(gamesData.games) ? gamesData.games.filter(game => game.platform.includes("PS4")).map(game => {
        return (

            <div className="testWrapper" key={game._id}>

                <div className="leftRightWrapper">
                    <div className="leftContainer">
                        <div className="rightContainer" style={{ backgroundImage: `url(http://localhost:5000/gamesimages/${game.images[0]})` }} >

                        </div>
                        <div className="leftWrapperTXT">
                            {/* <img className="playStationIcon" src={playstation} height="200px" width="200px" /> */}
                            <b style={{ width: "100px" }}>
                                {game.name.toUpperCase()}
                            </b>
                            <PlatformsViewModal  data={game}  key={game._id} />

                            {/* <Modal button={button}  key={game._id} /> */}
                        </div>
                    </div>
                </div>
            </div>

        )

    }) : null
    console.log(`filter arr`, playStationCards)
    // })
    //     : null


    return (
        <div className="text-center pt-5">
            <div className="cardBG text-center text-white mt-5 w-100 h-100 pl-5 pt-5">
                <img className="text-white pl-5 ml-5" src={playstationBG} height="150px" width="50%" alt="playstation" />
            </div>
            <div className="cardWrapper">

                {playStationCards}
            </div>
            <div className="cardTitle text-white text-center">
                <h2>
                    Latest Playstation Release
                    </h2>
            </div>
            <div className="d-flex justify-content-around flex-wrap">

                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerPlaystationTitle">Playstation VR</h3>
                        </div>
                        <img style={{ height: "22rem" }} src={playstationVR} alt="playstationVR" />

                    </div>
                    <div className="card-body">
                        <p className="card-text">Put yourself at the centre of an extraordinary gaming universe with PS VR exclusive games, hyper-real 3D environments and incredible clarity – all powered by your PS4 console.</p>
                        <div>
                            <a type="button" class="btn btn-primary" href="https://www.playstation.com/en-gb/explore/playstation-vr/" >See More</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerPlaystationTitle">Playstation Move Motion Controller</h3>
                        </div>
                        <img style={{ height: "22rem" }} src={playstationMotion} alt="playstation motion" />

                    </div>
                    <div className="card-body">
                        <p className="card-text">Enhance your PlayStation VR experience with up to two PlayStation Move motion controllers, in compatible games. </p>
                        <div>
                            <a type="button" class="btn btn-primary" href="https://www.playstation.com/en-gb/explore/accessories/playstation-move-motion-controller/">See More</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: '25rem', height: "42rem", margin: '1rem 0' }}>
                    <div className="cardImgWrapper">
                        <div style={{ height: "9rem" }}>
                            <h3 className="cardInnerPlaystationTitle">Playstation 4</h3>
                        </div>
                        <img style={{ height: "22rem" }} src={playstation3} alt="playstation" />

                    </div>
                    <div className="card-body">
                        <p className="card-text">The slimmer, redesigned PS4, the world's best selling console - packing in awesome gaming power in 500GB and 1TB versions. Available now in Jet Black and Glacier White.</p>
                        <div>
                            <a type="button" class="btn btn-primary" href="https://www.playstation.com/en-gb/explore/ps4/buy-ps4/">See More</a>
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
)(React.memo(PlaystationPage))
