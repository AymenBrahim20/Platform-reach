import React from 'react'
import "./Reviewws.scss";
import Review from '../Review/Review';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ReviewService from '../../Service/Review.service';

export const Reviewws = (productId) => {

  const id =useParams().id
  const [review,setReview]= useState()
  

  
  useEffect(()=>{
    ReviewService.getReviewByProductId(id).then((res)=>{
      console.log("dataofReviewByProduct",res)
      setReview(res.data.data)
            
    }).catch((err)=>{
      console.log(err)
    })
   },[id])



  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {
        review?.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" >
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}
