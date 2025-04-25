import React from 'react'
import "./Admin_cat.css"

import { useState } from 'react';
import { Link } from "react-router-dom";
import Admin_header from '../components/admin_header';
import Admin_footer from '../components/Admin_footer';
import Admin_sidebar from '../components/admin_sidebar';
import Swal from 'sweetalert2';
const Insert=({cat_insert})=> {
  const [cat,setCat]=useState("");
  const [slug,setSlug]=useState("")
const cat_submit=async (e) => {
  e.preventDefault()
  try{
const url=await fetch("http://localhost:3000/insert",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify({cat,slug}),
})
if(!url.ok){
  throw new Error("failed to submit")
}
const newUser=await url.json()
setCat("")
setSlug("")
Swal.fire({
        icon: 'success',
        title: 'Product Added!',
        text: 'Your product was successfully added to the database.',
        confirmButtonColor: '#07294d',
      })

  }
  catch (error) {
        console.log("error", error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
}
  return (
    <>
      <Admin_header />
      <div className="container_admin">
        <Admin_sidebar/>
        <div className="form-container">
          <form onSubmit={cat_submit}>
        <h3>Create Category</h3>
        <input type="text" value={cat} onChange={(e)=>setCat(e.target.value)} placeholder="Category Name" />

        <h3>Create Slug</h3>
        <input type="text" value={slug} onChange={(e)=>setSlug(e.target.value)} placeholder="Slug Name" />
        <button>Add Category</button>
        </form>
      </div>
      </div>
      

      <Admin_footer />
    </>
  )
}
export default Insert