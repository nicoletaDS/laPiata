import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_PASSWORD_RESET_REQUEST,
    USER_PASSWORD_RESET_SUCCESS,
    USER_PASSWORD_RESET_FAIL,

    USER_PASSWORD_RESET_CONFIRM_REQUEST,
    USER_PASSWORD_RESET_CONFIRM_SUCCESS,
    USER_PASSWORD_RESET_CONFIRM_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

} from '../constants/userConstants'

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true }
        case USER_REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}


export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading:true }
        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false, error:action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export const userResetPasswordReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_PASSWORD_RESET_REQUEST:
            return {loading:true }
        case USER_PASSWORD_RESET_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_PASSWORD_RESET_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const userResetPasswordConfirmReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_PASSWORD_RESET_CONFIRM_REQUEST:
            return {loading:true, }
        case USER_PASSWORD_RESET_CONFIRM_SUCCESS:
            return {loading:false}
        case USER_PASSWORD_RESET_CONFIRM_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {loading:true}
        case USER_DETAILS_SUCCESS:
            return {loading:false, userDetails:action.payload}
        case USER_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        case USER_DETAILS_RESET:
            return { userDetails:{} }
        default:
            return state
    }
}