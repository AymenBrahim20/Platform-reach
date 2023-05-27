/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
function CommonLayout ({children}) {
  return (
    <div>
 <Navbar/>
 {children}
 <Footer/>

 
  </div>
    
  )
}
export default CommonLayout