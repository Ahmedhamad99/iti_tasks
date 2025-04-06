
import Content from '../Header/Content';
 

import Headnav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Cart from "../Cart/Cart";
import NotFound from '../NotFound/NotFound';
import Products from '../Products/Products';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import ProductDetalis from './../Products/ProductDetails';



const Router = ()=>{
    return <>
    
    <BrowserRouter>
       <Headnav/>
       <Routes>

          <Route path="/" element={<Content/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="Home" element={<Content/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='Productdetalis/:id' element={<ProductDetalis/>}/>
          <Route path="*" element={<NotFound/>}/>





       </Routes>
       <Footer/>
     </BrowserRouter>
   
    </>
}

export default Router