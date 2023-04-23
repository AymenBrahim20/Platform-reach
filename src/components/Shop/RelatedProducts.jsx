/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

 function RelatedProducts ()  {
  return (
    <div>
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
  )
}

export default RelatedProducts