import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";
import './Layout.css'

function Layout({children}) {
  return (
    <div className='app-layout'>
        <Header />
        <Outlet />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
