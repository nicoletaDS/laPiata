import {useSelector} from 'react-redux'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import DropdownUser from './components/DropdownUser'
import DropdownMessage from './components/DropdownMessage'
import DropdownFavorits from './components/DropdownFavorits'


function SupplierHeader() {
  const [dropdownUser, setDropdownUser] = useState(false)
  const [dropdownMessage, setDropdownMessage] = useState(false)
  const [dropdownNotification, setDropdownNotification] = useState(false)
  const [dropdownFavorits, setDropdownFavorits] = useState(false);
  const [dropdownCart, setDropdownCart] = useState(false);

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
      title: 'Review-uri',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      title: 'Deconectare',
      path: '/',
      cName: 'dropdown-link'
    }
  ];

  const DropdownMessageItems = [
    {
      sender: 'Cristina Popescu',
      text: 'Legumele pe care le vindeti sunt bio?...',
      date: '22.10',
      path: '/',
      cName: 'dropdown-link',
      isRead: false
    },
    {
      sender: 'Marin Ionescu',
      text: 'Daca comand produse de 200lei puteti ...',
      date: '15.09',
      path: '/',
      cName: 'dropdown-link',
      isRead: true
    }
  ];

  const DropdownNotificationItems = [
    {
      sender: 'Cristina Popescu',
      text: 'a anulat comanda 123. Pentru detalii ...',
      date: '22.10',
      path: '/',
      cName: 'dropdown-link',
      isRead: false
    },
    {
      sender: 'Marin Ionescu',
      text: 'a adaugat un comentariu pentru produsul X...',
      date: '15.09',
      path: '/',
      cName: 'dropdown-link',
      isRead: true
    }
  ];

  const DropdownFavoritsItems = [
    {
      img: '/images/image_profile.png',
      title: 'Struguri negri fara samburi',
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
      <Link to='/products'>Produsele mele</Link>
      <Link to='/orders'>Comenzi</Link>
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
      
      <div className='icons'>
        <div 
          className='icon'
          onMouseEnter={() => onMouseEnter(setDropdownNotification)}
          onMouseLeave={() => onMouseLeave(setDropdownNotification)}
        >
          <Link to='/notifications'><i class="fa-solid fa-bell"></i></Link>
          <div className='counter'>2</div>
          {dropdownNotification && <DropdownMessage menuItems={DropdownNotificationItems}/>}
        </div>

        <div 
          className='icon'
          onMouseEnter={() => onMouseEnter(setDropdownMessage)}
          onMouseLeave={() => onMouseLeave(setDropdownMessage)}
        >
          <Link to='/messages'><i class="fa-solid fa-envelope"></i></Link>
          <div className='counter'>12</div>
          {dropdownMessage && <DropdownMessage menuItems={DropdownMessageItems}/>}
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

export default SupplierHeader;