/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Categories from '../components/Home/Categories';
import Slider from '../components/Home/Slider';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Trend from '../components/Home/Trend';
import Discount from '../components/Home/Discount';
import Services from '../components/Home/Services';
import SubCatSlider from '../components/Home/SubCatSlider';
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
  <Categories/>
<FeaturedProducts/>
<SubCatSlider/>
<Slider/>
<Trend/>
<Discount/>
<Services/> 
  
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