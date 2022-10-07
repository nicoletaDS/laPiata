import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'


function Logo() {
    return(
      <Link className="logo" to='/'>la piață</Link>
    )
}

export default Logo;