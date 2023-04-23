import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const data= [

    {id:1 ,
    img:"img/product/product-1.jpg",
    title:"Buttons tweed blazer",
    desc:"dssssssqsdsd",
    isNew:true,
    oldPrice:"$ 70.0",
     price:"$ 59.0",
  
  }
]
function Cart  () {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  )
}
export default Cart