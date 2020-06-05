import { FETCH_GAMES_REQUEST } from './gameActionsTypes'
import { FETCH_GAMES_SUCCESS } from './gameActionsTypes'
import { FETCH_GAMES_FAILURE } from './gameActionsTypes'


const initialState = {
    loading : false,
    games : "",
    error : ''

}


const gamesReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_GAMES_REQUEST : return {
            ...state, 
            loading : true,
        }
        case FETCH_GAMES_SUCCESS : return {
            ...state, 
            loading : false,
            games : action.payload,
            error : ''
        }
        case FETCH_GAMES_FAILURE : return {
            ...state, 
            loading : false,
            error : action.payload
        }

        default : return state
    }

}

export default gamesReducer