import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchGames } from '../../Redux/games/gameActions';
import StoreCard from '../../Components/StoreCard/StoreCard'
import "./SearchPage.scss"

const SearchPage = ({ gamesData, fetchGames }) => {

    const [state, setstate] = useState(gamesData.games)               // this state is to just receive the data an render the cards and it will be refreshed on every render and display all the cards
    const [filteredGames, setFilteredGames] = useState('')           // this state is going to receive the filtered data 
    const [searchGames, setSearchGames] = useState('')
    // this state is controlling the value of the of the input field
    useEffect(() => {
        fetchGames();
    }, [fetchGames])

    setTimeout(() => {
        setstate(gamesData.games)
    }, 500);

    // console.log(`filtered games`, filteredGames)
    // console.log(`initial games `, state)

    const searchHandler = (e) => {

        setSearchGames(e.target.value)
        filterGames(e.target.value)

    }

    // a function which will accept a value comming from the input
    // and will loop through an array and look for the values in this case the names if the name is included inside that array return it into the setFilteredGames state
    //(which will come from the state in this case)
    const filterGames = (inputValue) => {
        const temporary = state.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()))
        // console.log(`comming from filterGames function`, name, inputValue)
        // function which will receive the filtered value as a new state
        setFilteredGames(temporary)
    }


    //function that will pass the value inside a card and ren
    const showGames = Array.isArray(state)
        ? state.map((games, index) => <div className="p-2" key={index}> <StoreCard gamesData={games} key={index} /></div>)
        // console.log("games", games
        : null


    const showFilter = Array.isArray(filteredGames)
        ? filteredGames.map((filteredNameGames, index) => <StoreCard gamesData={filteredNameGames} key={index} />)
        // console.log("games", games)
        : null
    //console.log("filtered games", filteredGames)
    return (
        <>
            <div className="searchPageBG">
                <div className="searchInputStyles ">
                    <input autoComplete="off" name="name" value={searchGames} onChange={searchHandler} placeholder="Search games" style={{ paddingLeft: "15px" }} />
                </div>
                <div className="container-fluid justify-content-center d-flex flex-wrap">
                    {filteredGames === '' ? showGames : filteredGames.length === 0 ? <h1 style={{ color: "white", fontSize: "2rem", height: '50vh' }}>Your search did not match any games</h1> : showFilter}
                </div>
            </div>
        </>
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
)(SearchPage)


