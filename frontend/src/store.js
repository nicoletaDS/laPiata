import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
    userRegister: userRegisterReducer
})

const initialState = {

}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;