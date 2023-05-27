import React, {useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
import { Link ,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import Cart from "../Cart/Cart";
import LoginService from "../../Service/Login.service";
import "./Navbar.scss";


function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);


  const quantity = useSelector((state) => state.cart.products);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.setItem("currentUser", null);

      navigate("/");
      localStorage.clear()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
          <div className="header__logo" >
            <img  src="img/reachlogo1.png"  alt="Logo" id="logo" />
            </div>
          </Link>
        </div>
        <div className="links">
         
        {!currentUser?.user?.roles.includes("seller") && <span>Sell on Reach</span>}
          <span><SearchIcon/></span>
          <span><FavoriteBorderOutlinedIcon/></span>
          <div className='cartIcon' onClick={()=>setOpenCart(!openCart)}     >
            <span> <ShoppingCartOutlinedIcon/></span>
            <span className='carIconCount'>{quantity.length}</span>
            
            </div>

          
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="img/noavatar.jpg"
                alt=""
              />
              <span>{currentUser.user.username}</span>
              {open && <div className="options">
                {currentUser.user.roles.includes("seller") && (
                  <>
                    <Link className="link" to="/myproducts">
                      My Products
                    </Link>
                    <Link className="link" to="/addP">
                      Add New Product
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
            <Link  className="link" to="/login"> 
            <span> Sign in</span>
            </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
        {openCart && <Cart/>}
      </div>
      
       
          <hr />
          <div className="header__menu">
          <ul >
          <li> <Link className="link menuLink" to="/">
          Jewelry & Accessories            </Link></li>
            <li> <Link className="link menuLink" to="/">
            Art & Collectibles
            </Link></li>
            <li> <Link className="link menuLink" to="/">
            Home & Living
            </Link></li>
            <li> <Link className="link menuLink" to="/">
            Clothing & Shoes
            </Link></li>
            <li> <Link className="link menuLink" to="/">
            Personalized Gifts
            </Link></li>
           </ul>
          </div>
          <hr />
          

    </div>
  );
}

export default Navbar;


/* currentUser.user.files || */