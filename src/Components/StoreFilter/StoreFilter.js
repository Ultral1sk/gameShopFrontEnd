import React from 'react'
import "./StoreFilter.styles.scss"
import Button from "@material-ui/core/Button"
import nintendo from "../../assets/images/logos/nintendo.png"
import PS from "../../assets/images/logos/PS.png"
import windows from "../../assets/images/logos/windows1.png"
import xbox from "../../assets/images/logos/xbox.png"
import sports from "../../assets/images/categories/sports.png"
import action from "../../assets/images/categories/action.png"
import rpg from "../../assets/images/categories/rpg.png"
import strategy from "../../assets/images/categories/strategy.png"
import simulation from "../../assets/images/categories/simulation.png"
import adventure from "../../assets/images/categories/adventure.png"
import fight from "../../assets/images/categories/fight.png"
import education from "../../assets/images/categories/education.png"
import { useState } from 'react'
import click from "../../assets/click.gif"

const initialStateGenre = {

    "ACTION": false,
    "ADVENTURE": false,
    "EDUCATION": false,
    "FIGHTING": false,
    "RPG": false,
    "SIMULATION": false,
    "SPORTS": false,
    "STRATEGY": false,
}

const initialStatePlatform = {
    "NINTENDO": false,
    "PS4": false,
    "XBOX": false,
    "WIN": false
}

function StoreFilter(props) {

    const { resetFilter } = props

    const [isClickedGenre, setClickedGenre] = useState(initialStateGenre)
    const [isClickedPlatform, setisClickedPlatform] = useState(initialStatePlatform)
    // console.log("isClicked clicked", isClickedGenre, isClickedPlatform);
    //console.log(`props comming from storefilter`,props);
    const state = [
        { id: 1, images: action, title: "ACTION", },
        { id: 2, images: adventure, title: "ADVENTURE", },
        { id: 3, images: education, title: "EDUCATION", },
        { id: 4, images: fight, title: "FIGHTING", },
        { id: 5, images: rpg, title: "RPG", },
        { id: 6, images: simulation, title: "SIMULATION", },
        { id: 7, images: sports, title: "SPORTS", },
        { id: 8, images: strategy, title: "STRATEGY", },
    ]
    const categories = state.map((data) => {
        return (
            <div className="category" key={data.id} >
                <div className={!isClickedGenre[data.title] ? 'categoryImage' : 'categoryImageOn'}  >                                                                                           {/* default false, on click if  */}
                    <img src={data.images} alt={data.title} name={data.title} onClick={() => setClickedGenre(prevstate => ({ ...prevstate, [data.title]: !isClickedGenre[data.title] }))} />
                </div>
                <p>{data.title}</p>
            </div>)
    })
    const applyHandler = () => {
        props.filterHandler(isClickedGenre, isClickedPlatform)
    }
    const resetHandler = () => {
        setClickedGenre(initialStateGenre)
        setisClickedPlatform(initialStatePlatform)
        resetFilter()
        //console.log(`reset handler from children compoinent`)
    }
    return (
        <div className="filterWrapper">
            <div className="consoleFilter">
                <div className={!isClickedPlatform.NINTENDO ? 'consoles' : 'on'}  >
                    <img id="nintendo" src={nintendo} alt="nintendo" name="nintendo" onClick={() => setisClickedPlatform(prevstate => ({ ...prevstate, "NINTENDO": !isClickedPlatform["NINTENDO"] }))} />
                </div>
                <div className={!isClickedPlatform.PS4 ? 'consoles' : 'on'}>
                    <img id="ps" src={PS} alt="PS4" name="PS4" onClick={() => setisClickedPlatform(prevstate => ({ ...prevstate, "PS4": !isClickedPlatform["PS4"] }))} />
                </div>
                <div className={!isClickedPlatform.WIN ? 'consoles' : 'on'}  >
                    {/* { isClickedPlatform.WINDOWS ? 'on' : 'off'} */}
                    <img id="win" src={windows} name="win" onClick={() => setisClickedPlatform(prevstate => ({ ...prevstate, "WIN": !isClickedPlatform["WIN"] }))} alt="windows" />
                </div>
                <div className={!isClickedPlatform.XBOX ? 'consoles' : 'on'}   >
                    <img id="xbox" src={xbox} alt="xbox" name="xbox" onClick={() => setisClickedPlatform(prevstate => ({ ...prevstate, "XBOX": !isClickedPlatform["XBOX"] }))} />
                </div>
            </div>
            <div style={{ position: "relative" }}><img className="click1" src={click} alt="click1" /><h1 style={{ textAlign: "center", color: "white", }}>Filter Games</h1><img className="click2" src={click} alt="click2" /></div>
            <div className="categoriesFilter">
                {categories}
            </div>
            <div className="categoryButtons">
                <Button className="categoryButton apply" onClick={applyHandler}>APPLY</Button>
                <Button className="categoryButton reset" onClick={resetHandler}>RESET</Button>
            </div>
        </div>
    )
}
export default StoreFilter
