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

} from '../constants/userConstants'
import axios from 'axios'


export const register_func = (formRegisterData) => async (dispatch) => {

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const {data} = await axios.post('/api/users/', formRegisterData, config )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};


export const login_func = (email, password) => async (dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.post('/api/users/login/',
                        {"email":email, "password": password},
                        config )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};


export const logout_func = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch ({
        type:USER_LOGOUT
    })
}

export const reset_password_func = (email) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PASSWORD_RESET_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({email});

        const {data} = await axios.post('/api/users/reset_password/', body, config );

        dispatch({
            type: USER_PASSWORD_RESET_SUCCESS,
        })        
    }
    catch (error) {
        dispatch({
            type: USER_PASSWORD_RESET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};

export const reset_password_confirm_func = (uid, token, new_password, re_new_password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PASSWORD_RESET_CONFIRM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({uid, token, new_password, re_new_password});

        const {data} = await axios.post('/api/users/reset_password_confirm/', body, config )

        dispatch({
            type: USER_PASSWORD_RESET_CONFIRM_SUCCESS,
        })
        
    }
    catch (error) {
        dispatch({
            type: USER_PASSWORD_RESET_CONFIRM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};
