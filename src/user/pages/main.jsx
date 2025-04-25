import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../components/contex.jsx";
import App from './App.jsx'
import About from './About.jsx'
import ReactDOM from "react-dom/client";
import Detail from "./Detail.jsx"
import Cart from "./cart.jsx"
import Sign from "./sign.jsx"
import Register from "./register.jsx"



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Insert from '../../admin/pages/Admin_cat.jsx';
import Dashboard from '../../admin/pages/dashboard.jsx';
import Add_product from '../../admin/pages/Admin_addproduct.jsx';
import Admin_edit from '../../admin/pages/Admin_edit.jsx';
import Admin_viewproduct from '../../admin/pages/Admin_viewproduct.jsx';
import Contact from './contact.jsx';
import Gallery from './Gallery.jsx';
import Developer from './developer.jsx';
import Checkout from './checkout.jsx';
import Login from './login.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<GoogleOAuthProvider clientId="317582490449-114t9nvt7qc2puiqaj9fkjneh5qnn45v.apps.googleusercontent.com">
      <AuthProvider>
        


    <BrowserRouter>

      <Routes>
        
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-cat" element={<Insert />} />
        <Route path="/add-product" element={<Add_product />} />
        

       <Route path="/edit-product/:id" element={<Admin_edit />} />

        <Route path="/view-product" element={<Admin_viewproduct />} />
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/about' element={<Developer/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>

    </BrowserRouter>


    </AuthProvider>
    </GoogleOAuthProvider>





  </StrictMode>,
)
