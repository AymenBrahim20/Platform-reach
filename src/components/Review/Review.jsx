
import React from 'react'
import "./Review.scss";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ReviewService from '../../Service/Review.service';
function Review  ({review})  {
  


  return (
    <div className="review">
    <div className="user">
      <img
        className="pp"
        src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="info">
        <span>Garner David</span>
       
      </div>
    </div>
    
    <div className="stars">
    {Array(review?.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
      
      <span> {review?.star}</span>
    </div>
   
    <p>
    {review?.desc}
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" />
      <span>No</span>
    </div>
  </div>
  )
}


export default Review








