import React from 'react'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Orders () {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
   <div>
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links">
            <a href="./index.html"><i className="fa fa-home" /> Home</a>
            <span>My Products</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Shop Cart Section Begin */}
  <section className="shop-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price </th>
                  {<th >{currentUser.isSeller ? "Buyer" : "Seller"} </th>}
                  <th style={{textAlign:"center"}}>Contact</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart__product__item">
                    <img src="img/shop-cart/cp-1.jpg" alt="" />
                    <div className="cart__product__item__title">
                      <h6>Chain bucket bag</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 150.0</td>
                  <td className="cart__quantity">
                   <div className="cart__product__item__title">
                      <h6>Chain bucket bag</h6>
                    </div>
                  </td>
                  <td className="cart__total" style={{textAlign:"center"}}><MailOutlineIcon/></td>
                  <td className="cart__close"><span className="icon_close" /></td>
                </tr>
                <tr>
                  <td className="cart__product__item">
                    <img src="img/shop-cart/cp-2.jpg" alt="" />
                    <div className="cart__product__item__title">
                      <h6>Zip-pockets pebbled tote briefcase</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 170.0</td>
                  <td className="cart__quantity">
                    <div className="cart__product__item__title">
                      <h6>Chain bucket bag</h6>
                    </div>
                  </td>
                  <td className="cart__total" style={{textAlign:"center"}}><MailOutlineIcon/></td>
                  <td className="cart__close" ><span className="icon_close" /></td>
                </tr>
                <tr>
                  <td className="cart__product__item">
                    <img src="img/shop-cart/cp-3.jpg" alt="" />
                    <div className="cart__product__item__title">
                      <h6>Black jean</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 85.0</td>
                  <td className="cart__quantity">
                  <div className="cart__product__item__title">
                      <h6>Chain bucket bag</h6>
                    </div>
                  </td>
                  <td className="cart__total" style={{textAlign:"center"}}><MailOutlineIcon/></td>
                  <td className="cart__close"><span className="icon_close" /></td>
                </tr>
                <tr>
                  <td className="cart__product__item">
                    <img src="img/shop-cart/cp-4.jpg" alt="" />
                    <div className="cart__product__item__title">
                      <h6>Cotton Shirt</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 55.0</td>
                  <td className="cart__quantity">
                  <div className="cart__product__item__title">
                      <h6>Chain bucket bag</h6>
                    </div>
                  </td>
                  <td className="cart__total" style={{textAlign:"center"}}><MailOutlineIcon  /></td>
                  <td className="cart__close"><span className="icon_close" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="cart__btn">
           <Link to="/"> Home Page</Link>
          </div>
        </div>
       
      </div>
      
    </div>
  </section>
</div>

  )
}
export default Orders