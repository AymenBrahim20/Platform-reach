/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductList from '../components/Shop/ProductList';
import CategoryInfo from '../components/Shop/CategoryInfo';
import ShopSideBar from '../components/Shop/ShopSideBar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';





function CategoryShop () {
 /* const catId = parseInt(useParams) */

  return (
   <div>
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
      <a href="./index.html"><img src="img/logo.png" alt /></a>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
  </div>
  <Header/>
 
  <CategoryInfo/>







  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option-list">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links"  style={{textAlign:"left"}}>
            <a href="./index.html"><i className="fa fa-home" /> Home</a>
            <span>Shop</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Shop Section Begin */}
  <section className="shop-spad"  style={{textAlign:"left"}} > 
    <div className="container">
      <div className="row">
        <ShopSideBar/>
       <ProductList/>
      </div>
    </div>
  </section>
  {/* Shop Section End */}
  
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

   </div>

  )
}
export default CategoryShop




