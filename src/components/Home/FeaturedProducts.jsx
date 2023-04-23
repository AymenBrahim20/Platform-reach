/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react';
import ProductsService from '../../Service/Products.service';
import SubCategoryService from '../../Service/SubCategory.service';
function FeaturedProducts (){
  const [products,setProducts]=useState()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    // Limit the number of products displayed to 8
    setDisplayedProducts(products?.slice(0, 8));
  }, [products]);


  const getAllSubCategories=()=>{
    SubCategoryService.getAllSub().then((res)=>{
      console.log(res)
      setSubcategories(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getAllProducts=()=>{
    ProductsService.getAllProducts().then((res)=>{
      console.log(res)
      setProducts(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }


  useEffect(()=>{
    getAllSubCategories()
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
          <li data-filter=".women">Jewelry & Accessories</li>
          <li data-filter=".men">Art & Collectibles</li>
          <li data-filter=".kid">Home & Living</li>
          <li data-filter=".accessories">Clothing & Shoes</li>
          <li data-filter=".cosmetic">Personalized gifts</li>
        </ul>
      </div>
    </div>
    <div className="row property__gallery">

    {displayedProducts?.map(item=>(
      <Card item={item} key={item._id} />
    ))}
      
    </div>
  </div>
</section>






    </div>
  

  )
}

export default FeaturedProducts