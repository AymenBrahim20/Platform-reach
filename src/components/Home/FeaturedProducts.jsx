/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react';
import ProductsService from '../../Service/Products.service';
function FeaturedProducts (){
  const [products,setProducts]=useState()
  const getAllProducts=()=>{
    ProductsService.getAllProducts().then((res)=>{
      console.log(res)
      setProducts(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllProducts()
  },[])
 
  
 



  return (
  
    <div>

<section className="product spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="section-title" style={{textAlign:"left"}}>
          <h4>Featured Products</h4>
        </div>
      </div>
      <div className="col-lg-8 col-md-8">
        <ul className="filter__controls" >
          <li className="active" data-filter="*">All</li>
          <li data-filter=".women">Women’s</li>
          <li data-filter=".men">Men’s</li>
          <li data-filter=".kid">Kid’s</li>
          <li data-filter=".accessories">Accessories</li>
          <li data-filter=".cosmetic">Cosmetics</li>
        </ul>
      </div>
    </div>
    <div className="row property__gallery">

    {products?.map(item=>(
      <Card item={item} key={item.id} />
    ))}
      
    </div>
  </div>
</section>






    </div>
  

  )
}

export default FeaturedProducts