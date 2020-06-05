import { ADD_USER_DATA } from './userDataActionsType';


const initialState = {
    userData : []
}


const userReducer = (state = initialState, action) => {
    //console.log(`state comming from userReducer`,state);
    
    switch( action.type ) {

        case ADD_USER_DATA  : return {
            ...state,
            userData : action.payload
        }
    


        default : return state
    }

}


export default userReducer