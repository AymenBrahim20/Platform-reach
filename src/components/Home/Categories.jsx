/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import CategoryService from '../../Service/Category.service';
 function Categories ()  {

    const [categories,setCategories]=useState([])
    const [displayedCategories, setDisplayedCategories] = useState([]);
    useEffect(() => {
      // Limit the number of products displayed to 8
      setDisplayedCategories(categories?.slice(1, 5));
      console.log(categories);
    }, [categories]);
  
  
  
  
   const getAllCategories = () =>{
      CategoryService.getAll().then((res)=>{
           console.log(res)
           setCategories(res.data.data)
           console.log(categories)
      }).catch((err)=>{
        console.log(err)
      })
    }
  
      useEffect(()=>{
        getAllCategories()
        
      },[])
    

  return (
 <div>
  <section className="categories">
    <div className="container-fluid">
      <div className="row" style={{textAlign:"left"}} >
        <div className="col-lg-6 p-0">
          <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: "url(img/categories/category1.jpg)" }}>
           <Link  to=  {`categoryshop/${categories["0"]?._id}`}>
            <div className="categories__text">
              <h1>{categories["0"]?.name }</h1>
              <p>{categories["0"]?.description}</p>
                  <a> Shop now</a>
            </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
          {displayedCategories?.map(item=>(
             
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className="categories__item set-bg" style={{ backgroundImage: "url(img/categories/category5.jpg)" }}>
              <Link  to=  {`categoryshop/${item._id}`}>
                <div className="categories__text">
                  <h4>{item.name}</h4>
                  <p>358 items</p>
                  <a href="">Shop now</a>
                </div>
                </Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section></div>


 
  )
}
export default Categories