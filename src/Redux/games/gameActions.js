import { FETCH_GAMES_REQUEST } from './gameActionsTypes'
import { FETCH_GAMES_SUCCESS } from './gameActionsTypes'
import { FETCH_GAMES_FAILURE } from './gameActionsTypes'
import axios from 'axios'

export const fetchGamesRequest = () => {
    return {
        type: FETCH_GAMES_REQUEST
    }
}

export const fetchGamesSuccess = (games) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payload: games

    }
}

export const fetchGamesFailure = (error) => {
    return {
        type: FETCH_GAMES_FAILURE,
        payload: error

    }
}


export const fetchGames = () => {

    return (dispatch) => {
        // this function will tell the redcer the type of the action we want to call in this case it'll make the loading to true
        dispatch(fetchGamesRequest())
        axios.get('http://localhost:5000/')
            .then(res => {
                //console.log(`data comming from async fetchGames`, res.data)
                const games = res.data;
                dispatch(fetchGamesSuccess(games.message));
            })
            .catch(error => {
                const errorMSG = error.message;
                dispatch(fetchGamesFailure(errorMSG))
            })


    }
}