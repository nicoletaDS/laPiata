import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { reset_password_func } from '../../actions/userActions'
import Layout from '../../components/Layout/Layout'
import './ResetPasswordScreen.css'
function ResetPasswordScreen() {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(reset_password_func(email))
    }

    return (
        <Layout>
            <div className='reset-password-screen-wrapper'>
                <div className='reset-password-screen'>
                    <h1 className='reset-title'>Resetare Parola</h1>
                    <form onSubmit={submitHandler}>
                        <div className='reset-image-wrapper'>
                            <div className='profile-img'>
                                <img src={'/images/image_profile.png'} alt="Imagine Profil" id='photo'/>
                            </div>
                        </div>
                        <div className='description-page'>
                            <p className='description-body'> 
                                Pentru a reseta parola, introduceti email-ul mai jos.<br/> In cazul in care exista un cont cu acest email, veti primi un link pentru resetarea parolei!
                            </p>
                        </div>
                        <div className='reset-form-group'>
                            <div className='reset-form-element'>
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
            <div className='copyright-reset-password-page'>
                <p>Copyright &copy; La Piata</p>
            </div>
        </Layout> 
    )
}

export default ResetPasswordScreen
