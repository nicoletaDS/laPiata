import {useSelector} from 'react-redux'
import React from 'react'

import './Header.css'
import DefaultHeader from './DefaultHeader'
import CustomerHeader from './CustomerHeader'
import SupplierHeader from './SupplierHeader'


function Header() {

//const { userLogin } = useSelector(state => state.userLogin);
//const { userInfo } = userLogin;
const userInfo = false;

  return (
    <header className='header'>
      <SupplierHeader />
      {/* {!userInfo ? <DefaultHeader /> :
        userInfo.is_customer ? <CustomerHeader /> : <SupplierHeader />} */}
    </header>
  )
}

export default Header
