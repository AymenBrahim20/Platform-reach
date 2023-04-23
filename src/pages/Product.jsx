/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../Service/Products.service';

export const Product = () => {
  const {id} =useParams()

  const [product,setProduct]=useState()
 
  useEffect(()=>{
    ProductsService.getProduct(id).then((res)=>{
      console.log("dataofproduct",res)
      setProduct(res.data.data)
    })
   },[id])
 




  const [selectedImg, setSelectedImg] = useState("img");

  

 const [quanity,setQuantity]=useState(1);
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
  <Header/>
  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links" style={{textAlign:"left"}}>
            <a href="./index.html"><i className="fa fa-home" /> Home</a>
            <a href="#">{product?.categories?.name} </a>
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
           
              <div className="select-img" >
              
                <img  src={"http://localhost:4000/file/art/"+product?.files} alt  onClick={e=>setSelectedImg("img")} />
              </div>
              <div className="select-img" >
                <img  src={"http://localhost:4000/file/art/"+product?.files}        alt  onClick={e=>setSelectedImg("img2")} />
              </div>
              <div className="select-img" >
                <img  src={"http://localhost:4000/file/art/"+product?.files}      alt  onClick={e=>setSelectedImg("img3")} />
              </div>
              <div className="select-img" >
                <img   src={"http://localhost:4000/file/art/"+product?.files}       alt  onClick={e=>setSelectedImg("img4")} />
              </div> 
          
            </div>
            <div className="product__details__slider__content">
             <div  className='main-img'   >
                <img  src={"http://localhost:4000/file/art/"+product?.files[selectedImg]} alt />
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
                 <input type="text" value={quanity} />
                 <span className="inc qtybtn" onClick={() => setQuantity((prev) => prev + 1)}     >+</span></div>

             



              </div>
              <a href="#" className="cart-btn"><ShoppingCartOutlinedIcon /> Add to cart</a>
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
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
              </li>
            </ul>
            <div className="tab-content" style={{textAlign:"left"}}>
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <h6>Description</h6>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                  Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                  consequat massa quis enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem.</p>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                <h6>Specification</h6>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                  Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                  consequat massa quis enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem.</p>
              </div>
              <div className="tab-pane" id="tabs-3" role="tabpanel">
                <h6>Reviews ( 2 )</h6>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                  Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                  consequat massa quis enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="related__title">
            <h5>RELATED PRODUCTS</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-1.jpg">
              <div className="label new">New</div>
              <ul className="product__hover">
                <li><a href="img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                <li><a href="#"><span className="icon_heart_alt" /></a></li>
                <li><a href="#"><span className="icon_bag_alt" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Buttons tweed blazer</a></h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-2.jpg">
              <ul className="product__hover">
                <li><a href="img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                <li><a href="#"><span className="icon_heart_alt" /></a></li>
                <li><a href="#"><span className="icon_bag_alt" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Flowy striped skirt</a></h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 49.0</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg">
              <div className="label stockout">out of stock</div>
              <ul className="product__hover">
                <li><a href="img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                <li><a href="#"><span className="icon_heart_alt" /></a></li>
                <li><a href="#"><span className="icon_bag_alt" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Cotton T-Shirt</a></h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
              <ul className="product__hover">
                <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                <li><a href="#"><span className="icon_heart_alt" /></a></li>
                <li><a href="#"><span className="icon_bag_alt" /></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">Slim striped pocket shirt</a></h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
      </div>
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
</div>

    </div>
  )
}
export default Product