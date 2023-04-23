/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from '../Home/Card'
const data= [

  {id:1 ,
  img:"img/product/product-1.jpg",
  title:"Buttons tweed blazer",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},
{id:2 ,
  img:"img/product/product-2.jpg",
  title:"Flowy striped skirt",
  isNew:true,
  oldPrice:"$ 70.0",     price:"$ 59.0",

},
{id:3 ,
  img:"img/product/product-3.jpg",
  title:"Slim striped pocket shirt",
  isNew:true,
  oldPrice:"$ 70.0",
  price:"$ 59.0",

},
{id:4 ,
  backgroundImage:"url(img/product/product-1.jpg)",
  title:"Cotton T-Shirt",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},
{id:5 ,
  img:"img/product/product-5.jpg",
  title:"Fit micro corduroy shirt",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},
{id:6 ,
  img:"img/product/product-6.jpg",
  title:"Tropical Kimono",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},
{id:7 ,
  img:"img/product/product-7.jpg",
  title:"Contrasting sunglasses",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},
{id:7 ,
  img:"img/product/product-7.jpg",
  title:"Contrasting sunglasses",
  isNew:true,
  oldPrice:"$ 70.0",
   price:"$ 59.0",

},


]




function ProductList  ()  {
  return (
 <div className="col-lg-9 col-md-9">
          <div className="row">
          {data?.map(item=>(
      <Card item={item} key={item.id} />
    ))}
           
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
  )
}
export default ProductList