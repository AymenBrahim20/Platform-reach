/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from '@mui/material'
import React from 'react'
import { useState } from 'react'


function Categories  ()  {
  const [categories,setCategories]=useState()



  return (
  <div>
<section className="categories">
    <div className="container-fluid">
      <div className="row" style={{textAlign:"left"}} >
        <div className="col-lg-6 p-0">
       
        
          <div className="categories__item categories__large__item set-bg"  style={{ backgroundImage: "url(img/categories/category1.jpg)" }}        >
            <div className="categories__text">
              <h1>Jewelry & Accessories</h1>
              <p>Elevate your style with our carefully curated selection of jewelry and accessories, including necklaces, bracelets, earrings, and more	</p>
             <Link to ="/products/1">Shop now</Link>
            </div>
          </div>
         
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">

              <div className="categories__item set-bg"  style={{ backgroundImage: "url(img/categories/category2.jpg)" }} >
                <div className="categories__text">
                  <h4>Art & Collectibles</h4>
                  <p>358 items</p>
                  <Link to ="/products/2">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className="categories__item set-bg"  style={{ backgroundImage: "url(img/categories/category-3.jpg)" }} >
                <div className="categories__text">
                  <h4>Home & Living
</h4>
                  <p>273 items</p>
                  <Link to ="/products/3">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className="categories__item set-bg"  style={{ backgroundImage: "url(img/categories/category-4.jpg)" }} >
                <div className="categories__text">
                  <h4>Clothing & Shoes</h4>
                  <p>159 items</p>
                  <Link to ="/products/4">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className="categories__item set-bg"  style={{ backgroundImage: "url(img/categories/category5.jpg)" }} >
                <div className="categories__text">
                  <h4>Toys & Entertainment
</h4>
                  <p>792 items</p>
                  <Link to ="/products/5">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>
  )
}
export default Categories