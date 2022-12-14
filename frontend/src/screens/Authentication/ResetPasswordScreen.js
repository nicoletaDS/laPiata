import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { reset_password_func } from '../../actions/userActions'
import Layout from '../../components/Layout/Layout'
import './Authentication.css'
function ResetPasswordScreen() {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(reset_password_func(email))
    }

    return (
        <div className='screen-wrapper'>
            <div className='authentication-screen'>
                <h1 className='title'>Resetare Parola</h1>
                <form onSubmit={submitHandler}>
                    <div className='image-wrapper'>
                        <div className='profile-img'>
                            <img src={'/images/image_profile.png'} alt="Imagine Profil" id='photo'/>
                        </div>
                    </div>
                    <div className='description-page'>
                        <p className='description-body'> 
                            Pentru a reseta parola, introduceti email-ul mai jos.<br/> In cazul in care exista un cont cu acest email, veti primi un link pentru resetarea parolei!
                        </p>
                    </div>
                    <div className='form-group'>
                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                E-mail: 
                            </label>
                            <input required
                                type='email' 
                                className='form_input' 
                                placeholder='E-mail'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className='save-button' >Salveaza</button>
                </form>
            </div>
        </div>

    )
}

export default ResetPasswordScreen
