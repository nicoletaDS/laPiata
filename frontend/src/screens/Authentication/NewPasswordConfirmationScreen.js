import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { reset_password_confirm_func } from '../../actions/userActions'
import Layout from '../../components/Layout/Layout'
import './Authentication.css'
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function NewPasswordConfirmationScreen() {

    const [new_password, setNewPassword] = useState('')
    const [re_new_password, setReNewPassword] = useState('')
    const {uid} = useParams();
    const {token} = useParams();

    const dispatch = useDispatch()
    let navigate = useNavigate();
    let path = "/conectare";

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(reset_password_confirm_func(uid, token, new_password, re_new_password))
        navigate(path);
    }

    return (
        <div className='screen-wrapper'>
            <div className='authentication-screen'>
                <h1 className='title'>Parola noua</h1>
                <form onSubmit={submitHandler}>
                    <div className='image-wrapper'>
                        <div className='profile-img'>
                            <img src={'/images/image_profile.png'} alt="Imagine Profil" id='photo'/>
                        </div>
                    </div>
                    <p className='description-new-password-screen'> 
                        Introduceti noua parola in campurile de mai jos.<br/>
                    </p>
                    <div className='form-group'>
                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                Parola noua: 
                            </label>
                            <input required
                                type='password' 
                                className='form_input' 
                                placeholder='Parola noua'
                                value={new_password}
                                onChange={(e)=>setNewPassword(e.target.value)}/>
                        </div>
                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                Confirma parola noua: 
                            </label>
                            <input required
                                type='password' 
                                className='form_input' 
                                placeholder='Confirma parola noua'
                                value={re_new_password}
                                onChange={(e)=>setReNewPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className='save-button' >Salveaza</button>
                </form>
            </div>
        </div>

    )
}

export default NewPasswordConfirmationScreen
