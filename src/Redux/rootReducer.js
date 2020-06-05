import { combineReducers } from 'redux';
import gameReducer from './games/gameReducer';
import userReducer from './userData/userDataReducer';
import cartReducer from "./cart/cartReducer";
const rootReducer =  combineReducers({ games:gameReducer, userData : userReducer, carts:cartReducer });

export default rootReducer