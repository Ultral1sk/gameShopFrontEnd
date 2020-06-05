import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer  from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))                                                        // 1 - the create store method accepts a parameter which is the reducer function
export default store