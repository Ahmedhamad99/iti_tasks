
import Content from '../Header/Content';
 
import UserList from '../Users/Users';
import Headnav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Taskparent from '../TaskParent/taskparent';
import Details from '../DetalisUser/Details';
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
          <Route path='/detalis/:id' element={<Details/>}/>
          <Route path="Home" element={<Content/>}/>
          <Route path="Users" element={<UserList/>}/>
          <Route path="tasks" element={<Taskparent/>}/>
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