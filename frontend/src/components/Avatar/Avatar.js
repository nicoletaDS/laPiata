import React from 'react'
import './Avatar.css'
function Avatar(props) {
    console.log(props)
    return (
        <div className='profile-img'>
            <img src={props.imgSrc || '/images/image_profile.png'} alt="Imagine Profil" id='photo'/>
            <input  type='file'
                    id='file'
                    accept='/image/*' 
                    onChange={(e)=>props.handleChange(e)}/>
            <label for='file' id='uploadBtn'> + </label>
        </div>
    )
}

export default Avatar
