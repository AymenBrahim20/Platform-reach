/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-7">
          <div className="footer__about">
            <div className="footer__logo"     >    
              <a href="./index.html"><img src="img/reachlogo1.png"   id="logo" /></a>
            </div>
            <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              cilisis.</p>
            <div className="footer__payment" style={{textAlign:"left"}}>
              <a href="#"><img src="img/payment/payment-1.png" alt /></a>
              <a href="#"><img src="img/payment/payment-2.png" alt /></a>
              <a href="#"><img src="img/payment/payment-3.png" alt /></a>
              <a href="#"><img src="img/payment/payment-4.png" alt /></a>
              <a href="#"><img src="img/payment/payment-5.png" alt /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-5">
          <div className="footer__widget" style={{textAlign:"left"}}>
            <h6>Quick links</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4">
          <div className="footer__widget" style={{textAlign:"left"}}  > 
            <h6>Account</h6>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Orders Tracking</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 col-sm-8">
          <div className="footer__newslatter"style={{textAlign:"left"}} >
            <h6>NEWSLETTER</h6>
            <form action="#" >
              <input type="text" placeholder="Email" />
              <button type="submit" className="site-btn">Subscribe</button>
            </form>
            <div className="footer__social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa fa-pinterest" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          <div className="footer__copyright__text">
            <p>Copyright ©  All rights reserved </p>
          </div>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer