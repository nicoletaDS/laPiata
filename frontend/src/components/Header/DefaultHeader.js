import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Navitem from './components/Navitem'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import DropdownUser from './components/DropdownUser'
import DropdownMyProducts from './components/DropdownMyProducts'


function DefaultHeader() {
  const [barsMenu, setBarsMenu] = useState(false);
  const handleClick = () => setBarsMenu(!barsMenu)

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
      img: '/images/image_profile.png',
      title: 'Struguri negri fara samburi',
      price: '7 lei/kg',
      path: '/',
      cName: 'dropdown-link'
    },
    {
      img: '/images/image_profile.png',
      title: 'Rosii dulci de gradina...',
      price: '5 lei/kg',
      path: '/',
      cName: 'dropdown-link'
    }
  ];
  
    return (
      <div className={barsMenu ? 'header-body responsive' : 'header-body'}>
        <Logo />

        <Link to='/produse'>Produse</Link>

        <Link to='/vanzatori'>Vânzători</Link>

        <SearchBar />

        <Navitem 
          className='nav-item'
          itemLink='/favorite'
          itemName={'Favorite'}
          dropdown={<DropdownMyProducts menuItems={DropdownFavoritsItems} />}
        />
  
        <Navitem 
          className='nav-item'
          itemLink='/cosulmeu'
          itemName={'Coșul meu'}
          dropdown={<DropdownMyProducts menuItems={DropdownFavoritsItems}/>}
        />

        <Navitem 
          itemLink='/conectare'
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

export default DefaultHeader;