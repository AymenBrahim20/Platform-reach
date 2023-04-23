import React from 'react'
import SubCatCard from './SubCatCard'
import Slider from "infinite-react-carousel";
import SubCategoryService from '../../Service/SubCategory.service';
import { useEffect,useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

function SubCatSlider  () {

    const [subcategories, setSubcategories] = useState();

    useEffect (()=>{
     SubCategoryService.getAllSub().then((res)=>{
       console.log(res)
          setSubcategories(res.data.data)
     }).catch((err)=>{
       console.log(err)
     })
   
    },[])


  return (
    <div className="subCatSlide">
    <div className="subCatContainer">
  <Slider slidesToShow={5} arrowsScroll={5}>
  {subcategories.map(card=>(
    <SubCatCard   item={card} key={card.id} />
  ))}
   



  </Slider>
    </div>
    </div>
  )
}

export default SubCatSlider