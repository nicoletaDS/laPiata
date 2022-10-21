import React from 'react'
import './Authentication.css'
import Layout from '../../components/Layout/Layout'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { login_func } from '../../actions/userActions'


function LoginScreen() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const {error, loading, userInfo} = userLogin

  const dispatch = useDispatch()
  let navigate = useNavigate();

  useEffect(()=>{
    if(userInfo && userInfo.id){
      let path = '/acasa'; 
      navigate(path);
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login_func(email, password))
  }


  return (
      <div className="screen-wrapper">
        <div className='authentication-screen'>
          <h1 className='title'>Conectare</h1>
          <form onSubmit={submitHandler}>
            <div className='image-wrapper'>
              <div className='profile-img'>
                  <img src={'/images/image_profile.png'} alt="Imagine Profil" id='photo'/>
              </div>
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
              <div className='form-element-wrapper'>
                <label className='form_label'>
                    Parola: 
                </label>
                <input required
                    type='password' 
                    className='form_input' 
                    placeholder='Parola'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
              </div>
            </div>
            {error && <h6 className='error-login-message'>{error}</h6>}
            <div className="save-login-button-wrapper">
              <button type="submit" className='save-authentication-button' >Salveaza</button>
              <a href="/inregistrare" className='new-member-button'>Creaza cont nou</a>
              <a href="/resetare-parola" className='reset-password-button'>Ai uitat parola?</a>
            </div>
          </form>
        </div>
      </div>
  )
}

export default LoginScreen
