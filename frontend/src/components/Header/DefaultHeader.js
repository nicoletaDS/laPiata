import {useSelector} from 'react-redux'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import DropdownUser from './components/DropdownUser'
import DropdownFavorits from './components/DropdownFavorits'


function DefaultHeader() {
  const [dropdownUser, setDropdownUser] = useState(false);
  const [dropdownFavorits, setDropdownFavorits] = useState(false);
  const [dropdownCart, setDropdownCart] = useState(false);

  const onMouseEnter = (func) => {
    window.innerWidth < 960 ? func(false) : func(true)
  }

  const onMouseLeave = (func) => func(false)

  const DropdownUserItems = [
    {
      title: 'Conectare',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      title: 'Cont nou',
      path: '/',
      cName: 'dropdown-link'
    }
  ];

  const DropdownFavoritsItems = [
    {
      img: '...',
      tile: 'Struguri negri fara samburi',
      price: '7 lei/kg',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      img: '...',
      title: 'Rosii dulci de gradina...',
      price: '5 lei/kg',
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
          <div 
            className='nav-item'
            onMouseEnter={() => onMouseEnter(setDropdownFavorits)}
            onMouseLeave={() => onMouseLeave(setDropdownFavorits)}
          >
            <Link to='/favorits'>Favorite</Link>
            {dropdownFavorits && <DropdownFavorits menuItems={DropdownFavoritsItems}/>}
          </div>
          
          <div 
            className='nav-item'
            onMouseEnter={() => onMouseEnter(setDropdownCart)}
            onMouseLeave={() => onMouseLeave(setDropdownCart)}
          >
            <Link to='/Cart'>Coșul meu</Link>
            {dropdownCart && <DropdownFavorits menuItems={DropdownFavoritsItems}/>}
          </div>
        </div>
        
        <div className='icons'>
          <div 
            className='icon' 
            onMouseEnter={() => onMouseEnter(setDropdownUser)}
            onMouseLeave={() => onMouseLeave(setDropdownUser)}
          >
            <Link to=''><i className="fa-solid fa-user"></i></Link>
            {dropdownUser && <DropdownUser menuItems={DropdownUserItems}/>}
          </div>
        </div>
      </div>
    )
}

export default DefaultHeader;