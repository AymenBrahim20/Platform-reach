/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { useState } from 'react';
import Cart from './Cart/Cart';


const Icons = styled.div`
display: inline-block;
        gap: 15px;
        color: #777;
        cursor: pointer;
`;









function Header() {
const [open,setOpen]=useState(false)


  return (
   
<header className="header">

    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-2">
          <div className="header__logo" >
          <Link  to="/"><img src="img/reachlogo1.png"  alt="Logo" id="logo" /></Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <nav className="header__menu">
            <ul>
              
              <li><Link to="/products/1">Jewelry & Accessories</Link>
              <ul className="dropdown">
                  <li><a href="./product-details.html">Accessories</a></li>
                  <li><a href="./shop-cart.html">Necklaces</a></li>
                  <li><a href="./checkout.html">Rings</a></li>
                  <li><a href="./blog-details.html">Bracelets</a></li>
                </ul>
              
              </li>
              <li><Link to="/products/2">Art & Collectibles</Link>
              <ul className="dropdown">
                  <li><a href="./product-details.html">Photography</a></li>
                  <li><a href="./shop-cart.html">Prints</a></li>
                  <li><a href="./checkout.html">Painting</a></li>
                  <li><a href="./blog-details.html">Collectibles</a></li>
                </ul>
              </li>
              <li><Link  to="/products/3">Home & Living</Link>
              <ul className="dropdown">
                  <li><a href="./product-details.html">Home Decor</a></li>
                  <li><a href="./shop-cart.html">Furniture</a></li>
                  <li><a href="./checkout.html">Outdoor and gardening</a></li> 
                </ul>
              </li>

              <li><Link  to="/products/4">Clothing & Shoes</Link>
                <ul className="dropdown">
                  <li><a href="./product-details.html">Men's</a></li>
                  <li><a href="./shop-cart.html">Women's</a></li>
                  <li><a href="./checkout.html">Kids' & Baby</a></li>
                  <li><a href="./blog-details.html">Bags & Purses</a></li>
                </ul>
              </li>
              

              
             
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__right">
         
            <div className="header__right__auth">
            <Link to="about">About us</Link>
            </div>
            <div className="header__right__auth">
            <Link to="contact">Contact</Link>
            </div>
            <ul className="header__right__widget">
            <Icons>
             <li><SearchIcon/></li> 
           <li> <PersonOutlineOutlinedIcon/></li>
           <li> <FavoriteBorderOutlinedIcon/></li>
           <div className='cartIcon' onClick={()=>setOpen(!open)}     >
            <li> <ShoppingCartOutlinedIcon/></li> 
            <span className='carIconCount'>0</span>
            </div>
              </Icons>
            </ul>
            
          </div>
          {open && <Cart/>}
        </div>
     
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
     
    </div>
  </header>



    
  )
}
export default Header