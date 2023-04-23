import './App.css';
import { BrowserRouter, Routes, Route,/* Navigate */  } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import SubcategoryShop from './pages/SubCategoryShop';
import CategoryShop from './pages/CategoryShop';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login'; 
function App() {
  return (
    <div className="App">
    <BrowserRouter>

<Routes>
<Route path="/"   element={<Home/>} >  </Route>

<Route path="/contact"   element={<Contact/>} >  </Route>

<Route path="/subshop"   element={<SubcategoryShop/>} >  </Route>
<Route path="/categoryshop"   element={<CategoryShop/>} >  </Route>

<Route path="/product/:id"   element={<Product/>} >  </Route>

<Route path="/register"   element={<Register/>} >  </Route>
<Route path="/login"   element={<Login/>} >  </Route>


 
</Routes>











</BrowserRouter>
    </div>
  );
}

export default App;
