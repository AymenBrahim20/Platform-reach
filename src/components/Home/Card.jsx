/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { useState } from 'react';
import { addToCart } from '../../redux/CartReducer';

function Card ({item})  {
  const dispatch = useDispatch() 
  const [quantity]=useState(1);

 const  handleAddtoCart=(e)=>{
    e.preventDefault();
      dispatch(addToCart({

    id: item._id,
    title:item.name,
    desc:item.description,
    price:item.price,
    quantity, 
    img:"http://localhost:4000/file/art/"+item?.files


  }))

}


  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix women" >
    <div className="product__item"  >
    <Link  to=  {`product/${item._id}`}>
      <div className="product__item__pic set-bg"    > 
      {item.files?.map((i)=>{
        return (<img  className='card-img'  alt='' src={"http://localhost:4000/file/art/"+ i} />    )
                      
                    })}
        <div className="label new">  <span>New</span></div>
        <ul className="product__hover" >
          <li><a href="/" className="image-popup"><span className="arrow_expand" /></a></li>
          <li><a href="/"><span className="icon_heart_alt" /></a></li>
          <li><a href="/"><span className="icon_bag_alt"  onClick={handleAddtoCart}   /></a></li>
        </ul>

      </div>
      <div className="product__item__text">
        <h6 className='product-title'><a href="#">{item.name}</a></h6>
        <div className="rating" style={{textAlign:"left"}}>
          <i className="fa fa-star"  />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <div class="product__price"  style={{textAlign:"left"}}>${item.price} <span>{item.oldprice}</span></div>
      </div>
      </Link>
    </div>
  </div>
  )
}
export default Card