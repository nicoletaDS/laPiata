import {useSelector} from 'react-redux'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import DropdownUser from './components/DropdownUser'


function DefaultHeader() {
  const [dropdownUser, setDropdownUser] = useState(false);

  const onMouseEnter = (func) => {
    window.innerWidth < 960 ? func(false) : func(true)
  }

  const onMouseLeave = (func) => func(false)

  const DropdownUserItems = [
    {
      title: 'Date personale',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      title: 'Adrese de livrare',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      title: 'Comenzile mele',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      title: 'Deconectare',
      path: '/',
      cName: 'dropdown-link'
    }
  ];
  
  return (
    <div className='header-body'>
      <Logo />
      <div className='navigation'>
        <Link to='/products'>Produse</Link>
        <Link to='/suppliers'>Vânzători</Link>
        <SearchBar />
        <Link to='/favorits'>Favorite</Link>
        <Link to='/cart'>Coșul meu</Link>
      </div>
      
      <div className='icons'>
        <div className='icon'>
          <Link to='/notifications'><i class="fa-solid fa-bell"></i></Link>
          <div className='counter'>2</div>
        </div>

        <div className='icon'>
          <Link to='/notifications'><i class="fa-solid fa-envelope"></i></Link>
          <div className='counter'>12</div>
        </div>

        <div 
          className='icon'
          onMouseEnter={() => onMouseEnter(setDropdownUser)}
          onMouseLeave={() => onMouseLeave(setDropdownUser)}
        >
          <Link to='/user'><i class="fa-solid fa-user"></i></Link>
          {dropdownUser && <DropdownUser menuItems={DropdownUserItems}/>}
        </div>
      </div>
    </div>
  )
}

export default DefaultHeader;