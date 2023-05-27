/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Product.scss";


import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductsService from '../../Service/Products.service';
import LoginService from '../../Service/Login.service';
import { addToCart } from '../../redux/CartReducer';
import RelatedProducts from '../../components/Shop/RelatedProducts';
import { Reviewws } from '../../components/Reviewws/Reviewws';
export const Product = () => {
  const dispatch = useDispatch() 

  const {id} =useParams()
  const [product,setProduct]=useState()
  const [user,setUser]=useState()
  
  useEffect(()=>{
    ProductsService.getProduct(id).then((res)=>{
      console.log("dataofproduct",res)
      setProduct(res.data.data)
    })
   },[id])
 

   


  const [selectedImg, setSelectedImg] = useState("");

  

 const [quantity,setQuantity]=useState(1);
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
  {/* Offcanvas Menu End */}
  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links" style={{textAlign:"left"}}>
            <a href="./index.html"><i className="fa fa-home" /> Home</a>
            
            <a href="#">{product?.subcategories?.name} </a>
            <span>{product?.name}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Product Details Section Begin */}
  <section className="product-details spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product__details__pic">
            <div className="product__details__pic__left product__thumb nice-scroll">
            {product?.files?.map((i)=>{
              
              return(
                 <div>
              <div className="select-img" >
                       
                <img  src={"http://localhost:4000/file/art/"+i} alt=""  onClick={(e) => setSelectedImg("img")} />
                
              </div>
             
              </div>
           ) })}
            
            </div>
            
            <div className="product__details__slider__content">
             <div  className='main-img'>
                <img  src={"http://localhost:4000/file/art/"+product?.files[selectedImg]} alt="" />
                </div>
              <div className="product-carousel">
             
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product__details__text" style={{textAlign:"left"}}  >
            <h3>{product?.name} <span>Brand: SKMEIMore Men Watches from SKMEI {/* {product?.seller} */}</span></h3>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <span>( 138 reviews ) {/* {product?.reviews}</ */}</span>
            </div>
            <div className="product__details__price">$ {product?.price} <span>$ 83.0</span></div>
            <p className='product_description'>{product?.description}</p>
            <div className="product__details__button">
              <div className="quantity">
                <span>Quantity:</span>
                <div className="pro-qty"><span className="dec qtybtn"  onClick={() => setQuantity((prev) => 
                       (prev === 1 ? 1 : prev - 1)) }  >-</span>
                 <input type="text" value={quantity} />
                 <span className="inc qtybtn" onClick={() => setQuantity((prev) => prev + 1)}     >+</span></div>
              </div>
              <a href="#" className="cart-btn" onClick={()=> dispatch(addToCart({
                id: product._id,
                title:product.name,
                desc:product.description,
                price:product.price,
                quantity, 
                img:"http://localhost:4000/file/art/"+product?.files


              }))}><ShoppingCartOutlinedIcon /> Add to cart</a>
              <ul>
                <li><a href="#"><span className="icon_heart_alt" /></a></li>
                <li><a href="#"><span className="icon_adjust-horiz" /></a></li>
              </ul>
            </div>
            <div className="info-product">
              <span>Vendor: Polo {/* {product.seller} */} </span>
              
            </div>
            <div className="product__details__widget" style={{textAlign:"left"}}>
              <ul>
                <li>
                  <span>Availability:</span>
                  <div className="stock__checkbox">
                    <label htmlFor="stockin">
                      In Stock  {/* {product.stock} */}
                      <input type="checkbox" id="stockin" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </li>
                <li>
                  <span>Available color:</span>
                  <div className="color__checkbox">
                    <label htmlFor="red">
                      <input type="radio" name="color__radio" id="red" defaultChecked />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="black">
                      <input type="radio" name="color__radio" id="black" />
                      <span className="checkmark black-bg" />
                    </label>
                    <label htmlFor="grey">
                      <input type="radio" name="color__radio" id="grey" />
                      <span className="checkmark grey-bg" />
                    </label>
                  </div>
                </li>
                <li>
                  <span>Available size:</span>
                  <div className="size__btn">
                    <label htmlFor="xs-btn" className="active">
                      <input type="radio" id="xs-btn" />
                      xs
                    </label>
                    <label htmlFor="s-btn">
                      <input type="radio" id="s-btn" />
                      s
                    </label>
                    <label htmlFor="m-btn">
                      <input type="radio" id="m-btn" />
                      m
                    </label>
                    <label htmlFor="l-btn">
                      <input type="radio" id="l-btn" />
                      l
                    </label>
                  </div>
                </li>
                <li>
                  <span>Promotions:</span>
                  <p>Free shipping</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="product__details__tab">
          <div className='left'>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                <p></p>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Reviews ( 2 )</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">About seller</a>
              </li>
            </ul>
            <div className="tab-content" style={{textAlign:"left"}}>
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
              <div className='description'>
                <h2>Description</h2>
                <p>{product?.longDesc}</p>
                
              </div>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
              <Reviewws productId={id}/>            
              
              </div>
              <div className="tab-pane" id="tabs-3" role="tabpanel">
              <div className="seller">
            <h2>Know your Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span >Anna Bell</span>
                {!isNaN(product?.totalStars / product?.starNumber) && (
              <div className="stars">
              {Array(Math.round(product?.totalStars / product?.starNumber))
                          .fill().map((item, i) => (
                          <img src="/img/star.png" alt="" key={i} />
                          ))}
                
                <span> {Math.round(product?.totalStars / product?.starNumber)}</span>
              </div>
              )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
                
             
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <RelatedProducts/>
    </div>
  </section>
  {/* Product Details Section End */}
  {/* Instagram Begin */}
  <div className="instagram">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-1.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-2.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-3.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-4.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" data-setbg="img/instagram/insta-6.jpg">
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Instagram End */}
  {/* Search Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
</div>

    </div>
  )
}
export default Product