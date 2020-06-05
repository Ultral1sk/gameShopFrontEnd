import { ADD_USER_DATA } from './userDataActionsType';


export const addUserData = (userData) => {
    return {
        type : ADD_USER_DATA,
        payload : userData
    }

}

