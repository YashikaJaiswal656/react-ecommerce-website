import React from 'react'
import { Link } from "react-router-dom";
const Admin_sidebar = () => {
  return (
    <div className="sidebar">
          <h2>Dashboard Menu</h2>
          <ul>
            <Link to="/admin-dashboard">   <li > Home</li></Link>
            <Link to="/admin-cat">   <li> Create Category</li></Link>
            <Link to="/add-product">   <li> Add Product</li></Link>

            <Link to="/view-product"> <li> View Products</li> </Link>
            
            <Link to="../"> <li> Website</li> </Link>
            
          </ul>
        </div>
  )
}

export default Admin_sidebar