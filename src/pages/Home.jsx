/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home () {
  return (
   
<div>
 
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__close">+</div>
    <ul className="offcanvas__widget">
      <li><span className="icon_search search-switch" /></li>
      <li><a href="#"><span className="icon_heart_alt" />
          <div className="tip">2</div>
        </a></li>
      <li><a href="#"><span className="icon_bag_alt" />
          <div className="tip">2</div>
        </a></li>
    </ul>                            
    <div className="offcanvas__logo">
      <a href="./index.html"><img src="reachlogo1.png" alt /></a>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
  </div>
  <Header/>
 <Layout/>
 <Footer/>
  
  {/* Search Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search End */}
</div>





  )
}
export default Home;