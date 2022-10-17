import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userRegisterReducer } from './reducers/userReducers';
import { userLoginReducer } from './reducers/userReducers';
import { userDetailsReducer} from './reducers/userReducers';

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;