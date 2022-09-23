import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../constants/userConstants'
import axios from 'axios'

require('dotenv').config();

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
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/`, formRegisterData, config )

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
