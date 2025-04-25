import React from 'react'
import "./dashboard.css"
import { Link } from "react-router-dom";
import Admin_header from '../components/admin_header';
import Admin_footer from '../components/Admin_footer';
import Admin_sidebar from '../components/admin_sidebar';


function Dashboard() {
  return (
    <>
      <Admin_header />
      <div className="container_admin">
        <Admin_sidebar/>
        <div class="dashboard-home">
          <h2>Welcome to Fresh Shop Admin Dashboard</h2>
          <p>Manage your products, orders, and categories efficiently.</p>
          <div class="quick-links">
            <Link to="/add-product"><a href="#">Add Product</a></Link>
            <Link to="/admin-cat"><a href="#">Create Category</a></Link>
            <Link to="/view-product"><a href="#">View Products</a></Link>
            
            
          </div>
        </div>
      </div>
      <Admin_footer />
    </>
  )
}
export default Dashboard