import React from 'react'
import Layout from '../../components/Layout/Layout'
import './Authentication.css'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { register_func } from '../../actions/userActions'
import Avatar from '../../components/Avatar/Avatar'

function SignUpScreen() {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [re_password, setRePassword] = useState('')
    const [is_customer, setIsCustomer] = useState('')
    const [selectedFile, setSelectedFile] = useState("")
    const [imgSrc, setImgSrc] = useState("");
    const [message, setMessage] = useState('')
    const [accountCreated, setAccountCreated] = useState(false)


    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {userInfo} = userRegister

    let navigate = useNavigate(); 
    const formData = new FormData()
    useEffect(()=>{
        if (selectedFile) {

            const reader = new FileReader();
            reader.addEventListener('load', function(){
                setImgSrc(reader.result);
            });
    
            reader.readAsDataURL(selectedFile);
        }
    },[selectedFile])
    

    const handleChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.substring(0,5)==="image"){
            setSelectedFile(file);

        }else{

        }
    }


    useEffect(() => {
        // if userInfo exist redirect the user 
        if(userInfo && userInfo.id){
  
            let path = '/'; 
            navigate(path);
        }
    }, [navigate,userInfo])
  

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== re_password){
          setMessage('Passwords do not match')
        }
        else {
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);
            formData.append('re_password', re_password);
            formData.append('is_customer', is_customer);
            if(selectedFile){
                formData.append('image_profile', selectedFile);
            }
            dispatch(
                register_func(formData),
                setAccountCreated(true)
            )
  
        }
    }
  
    if (userInfo) {
          let path = '/'; 
          navigate(path);
    }
      
    if (accountCreated) {
          let path = '/conectare'; 
          navigate(path);
    }

    return (
        <div className="screen-wrapper">
            <div className='authentication-screen'>
                <h1 className='title'>Inregistrare</h1>
                <form onSubmit={submitHandler}>
                    <div className='image-wrapper'>
                        <Avatar handleChange={handleChange} imgSrc={imgSrc}/>
                    </div>
                    <div className='form-group'>
                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                Prenume:
                            </label>
                            <input required
                                type='text'
                                className='form_input'
                                placeholder='Prenume'
                                value={first_name}
                                onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                Nume:
                            </label>
                            <input required
                                type='text'
                                className='form_input'
                                placeholder='Nume'
                                value={last_name}
                                onChange={(e)=>setLastName(e.target.value)}/>
                        </div>

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
                                Telefon: 
                            </label>
                            <input required
                                type='text' 
                                className='form_input' 
                                placeholder='Telefon'
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}/>
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

                        <div className='form-element-wrapper'>
                            <label className='form_label'>
                                Repeta Parola: 
                            </label>
                            <input required
                                type='password' 
                                className='form_input' 
                                placeholder='Repeta Parola'
                                value={re_password}
                                onChange={(e)=>setRePassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className='radio-toolbar'>
                        <input type="radio" id="buyer" name="userType" value="true" onChange={(e)=>setIsCustomer(e.target.value)}/>
                        <label for="buyer">Vreau sa cumpar</label>

                        <input type="radio" id="seller" name="userType" value="false" onChange={(e)=>setIsCustomer(e.target.value)}/>
                        <label for="seller">Vreau sa vand</label>
                    </div>
                    <div className="authentication-button-wrapper">
                        <button type="submit" className='save-authentication-button' >Salveaza</button>
                        <a href="/conectare" className='already-member'>Sunt deja membru</a>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpScreen
