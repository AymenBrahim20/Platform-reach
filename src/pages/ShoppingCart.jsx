/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {useSelector,useDispatch} from "react-redux"
import { removeItem } from '../redux/CartReducer'
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'


/* const KEY = process.env.REACT_APP_STRIPE;
 */



function ShoppingCart () {
    const cart = useSelector((state) => state.cart.products);
    const dispatch = useDispatch() 
    const totalPrice =()=>{
        let total=0;
        cart.forEach((item)=> (total+=item.quantity*item.price))
        return total.toFixed(2);//display 2 decimals a
      }
      const [quantity,setQuantity]=useState(1);



  return (
    <div>
     {/* Breadcrumb Begin */}

    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links" style={{textAlign:"left"}}>
                        <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                        <span>Shopping cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Breadcrumb End */}

    {/* Shop Cart Section Begin */}

   <section className="shop-cart spad" style={{textAlign:"left"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="shop__cart__table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
              <tr>
                <td className="cart__product__item">
                
                  <img src={item.img} width={90} style={{height:"90px"}} alt />
                  <div className="cart__product__item__title">
                    <h6>{item.title}</h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </td>
                <td className="cart__price">$ {item.price}</td>
                <td className="cart__quantity">
                  <div className="pro-qty"><span className="dec qtybtn"  onClick={() => setQuantity((prev) => 
                       (prev === 1 ? 1 : prev - 1)) }  >-</span>
                   <input type="text" value={item.quantity} />
                   <span className="inc qtybtn" onClick={() => setQuantity((prev) => prev + 1)}>+</span></div>                   
                </td>
                <td className="cart__total"> $ {item.price * item.quantity}</td>
                <td className="cart__close"><span className="icon_close" onClick={()=>dispatch(removeItem(item.id))} /></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="cart__btn">
          <a href="#">Continue Shopping</a>
        </div>
      </div>
      
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="discount__content">
          <h6>Discount codes</h6>
          <form action="#">
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit" className="site-btn">Apply</button>
          </form>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-2">
        <div className="cart__total__procced">
          <h6>Cart total</h6>
          <ul>
            <li>Subtotal <span>$ 750.0</span></li>
            <li>Total <span>$ {totalPrice()}</span></li>
          </ul>
          <a href="#" className="primary-btn">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Shop Cart Section End */}


    </div>
  )
}
export default ShoppingCart