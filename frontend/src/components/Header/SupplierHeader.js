import {useSelector} from 'react-redux'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Navitem from './components/Navitem'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import DropdownUser from './components/DropdownUser'
import DropdownMessage from './components/DropdownMessage'


function SupplierHeader() {
  const [barsMenu, setBarsMenu] = useState(false);
  const handleClick = () => setBarsMenu(!barsMenu)

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

  return (
    <div className={barsMenu ? 'header-body responsive' : 'header-body'}>
      <Logo />

      <Link to='/produsele_mele'>Produsele mele</Link>

      <Link to='/comenzi'>Comenzi</Link>

      <SearchBar />

      <Navitem
        className='icon'
        itemLink='/notificari'
        itemName={barsMenu ? 'Notificari' : <i className="fa-solid fa-bell" />}
        counter={barsMenu ? null : <div className='counter'>2</div>}
        dropdown={<DropdownMessage menuItems={DropdownNotificationItems} />}
      />

      <Navitem
        className='icon'
        itemLink='/mesaje'
        itemName={barsMenu ? 'Mesaje' : <i className="fa-solid fa-envelope" />}
        counter={barsMenu ? null : <div className='counter'>2</div>}
        dropdown={<DropdownMessage menuItems={DropdownMessageItems} />}
      />

      <Navitem 
        itemLink='/profil'
        className='icon' 
        itemName={barsMenu ? 'Contul meu' : <i className="fa-solid fa-user" />}
        dropdown={<DropdownUser menuItems={DropdownUserItems}/>}
      />

      <button type='button' className="bars-icon" onClick={handleClick}>
        {barsMenu ? <i className="fa fa-close" /> : <i className="fa fa-bars" />}
      </button>
    </div>
  )
}

export default SupplierHeader