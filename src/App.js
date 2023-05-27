import './App.css';
import "./App.scss";
import React from 'react';
import { BrowserRouter, Routes, Route,Navigate, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SubcategoryShop from './pages/SubCategoryShop';
import CategoryShop from './pages/CategoryShop';
import Product from './pages/Product/Product';
import Register from './pages/Register';
import Login from './pages/Login'; 
import ShoppingCart from './pages/ShoppingCart';
import AddProduct from './pages/AddProduct/AddProduct';
import MyProducts from './pages/MyProducts';
import Orders from './pages/Orders';
import Messages from './pages/Messages/Messages';
import Message from './pages/Message/Message';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
function App() {

  const user = useSelector((state) => state.user.currentUser);


  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
<Routes>

<Route path="/"   element={<Home/>} >  </Route>

<Route path="/contact"   element={<Contact/>} >  </Route>

<Route path="/subshop"   element={<SubcategoryShop/>} >  </Route>
<Route path="/categoryshop/:id"   element={<CategoryShop/>} >  </Route>
<Route path="/shoppingcart"   element={<ShoppingCart/>} >  </Route>

<Route path="/product/:id"   element={<Product/>} >  </Route>
<Route path="/messages"   element={<Messages/>} >  </Route>
<Route path="/message"   element={<Message/>} >  </Route>
<Route path="/addP"   element={<AddProduct/>} >  </Route>
<Route path="/myproducts"   element={<MyProducts/>} >  </Route>
<Route path="/orders"   element={<Orders/>} >  </Route>

<Route path="/register"   element={<Register/>} >  </Route>
<Route path="/login" element={user?<Navigate to="/" /> : <Login />}/>

 
</Routes>


<Footer/>









</BrowserRouter>
    </div>
  );
}

export default App;
