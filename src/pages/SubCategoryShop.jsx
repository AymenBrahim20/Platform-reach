/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function SubCategoryShop() {
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
  {/* Breadcrumb Begin */}
  <div className="breadcrumb-option">
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
  <section className="shop spad"  style={{textAlign:"left"}} > 
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="shop__sidebar">
            <div className="sidebar__categories">
              <div className="section-title">
                <h4>Categories</h4>
              </div>
              <div className="categories__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading active">
                      <a data-toggle="collapse" data-target="#collapseOne">Jewelry & Accessories</a>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Necklaces</a></li>
                          <li><a href="#">Rings</a></li>
                          <li><a href="#">Bracelets</a></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseTwo">Art & Collectibles</a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Photography</a></li>
                          <li><a href="#">Prints</a></li>
                          <li><a href="#">Painting</a></li>
                          <li><a href="#">Collectibles</a></li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseThree">Home & Living</a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Home Decor</a></li>
                          <li><a href="#">Furniture</a></li>
                          <li><a href="#">Outdoor and gardening</a></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFour">Clothing & Shoes</a>
                    </div>
                    <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Men's</a></li>
                          <li><a href="#">Women's</a></li>
                          <li><a href="#">Kids' & Baby</a></li>
                          <li><a href="#">Bags & Purses</a></li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="sidebar__filter">
              <div className="section-title">
                <h4>Shop by price</h4>
              </div>
              <div className="filter-range-wrap">
                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={33} data-max={99} />
                <div className="range-slider">
                  <div className="price-input">
                    <p>Price:</p>
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                  </div>
                </div>
              </div>
              <a href="#">Filter</a>
            </div>
            <div className="sidebar__sizes">
              <div className="section-title">
                <h4>Shop by size</h4>
              </div>
              <div className="size__list">
                <label htmlFor="xxs">
                  xxs
                  <input type="checkbox" id="xxs" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xs">
                  xs
                  <input type="checkbox" id="xs" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xss">
                  xs-s
                  <input type="checkbox" id="xss" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="s">
                  s
                  <input type="checkbox" id="s" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="m">
                  m
                  <input type="checkbox" id="m" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="ml">
                  m-l
                  <input type="checkbox" id="ml" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="l">
                  l
                  <input type="checkbox" id="l" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xl">
                  xl
                  <input type="checkbox" id="xl" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="sidebar__color">
              <div className="section-title">
                <h4>Shop by size</h4>
              </div>
              <div className="size__list color__list">
                <label htmlFor="black">
                  Blacks
                  <input type="checkbox" id="black" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="whites">
                  Whites
                  <input type="checkbox" id="whites" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="reds">
                  Reds
                  <input type="checkbox" id="reds" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="greys">
                  Greys
                  <input type="checkbox" id="greys" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="blues">
                  Blues
                  <input type="checkbox" id="blues" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="beige">
                  Beige Tones
                  <input type="checkbox" id="beige" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="greens">
                  Greens
                  <input type="checkbox" id="greens" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="yellows">
                  Yellows
                  <input type="checkbox" id="yellows" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg"   style={{ backgroundImage: "url(img/shop/shop-1.jpg)" }}      >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Furry hooded parka</a></h6>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-2.jpg)" }} >
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-2.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-3.jpg)" }} >
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-3.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Croc-effect bag</a></h6>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-4.jpg)" }} >
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-4.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Dark wash Xavi jeans</a></h6>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item sale">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-5.jpg)" }} >
                  <div className="label">Sale</div>
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-5.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Ankle-cuff sandals</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-6.jpg)" }} >
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-6.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Contrasting sunglasses</a></h6>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-7.jpg)" }} >
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-7.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Circular pendant earrings</a></h6>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-8.jpg)" }} >
                  <div className="label stockout stockblue">Out Of Stock</div>
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-8.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
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
            <div className="col-lg-4 col-md-6">
              <div className="product__item sale">
                <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/shop/shop-9.jpg)" }}>
                  <div className="label">Sale</div>
                  <ul className="product__hover">
                    <li><a href="img/shop/shop-9.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Water resistant zips backpack</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="pagination__option">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i className="fa fa-angle-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Section End */}
  {/* Instagram Begin */}
  <div className="instagram">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg"  style={{ backgroundImage: "url(img/instagram/insta-1.jpg)" }}     >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" style={{ backgroundImage: "url(img/instagram/insta-2.jpg)" }}>
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" style={{ backgroundImage: "url(img/instagram/insta-3.jpg)" }}>
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" style={{ backgroundImage: "url(img/instagram/insta-4.jpg)" }}>
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" style={{ backgroundImage: "url(img/instagram/insta-5.jpg)" }}>
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="instagram__item set-bg" style={{ backgroundImage: "url(img/instagram/insta-6.jpg)" }}>
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
  {/* Search End */}
</div>




    </div>
  )
}
export default SubCategoryShop