import React from 'react'
import './DefaultLayout.css'
import Footer from '../Footer/Footer'

function DefaultLayout({children}) {
    return (
        <div className='default-app-layout'>
            {children}
        </div>
        
      )
}

export default DefaultLayout
