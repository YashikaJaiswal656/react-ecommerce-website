import React, { useEffect, useState } from 'react'
import Admin_header from '../components/admin_header';
import Admin_footer from '../components/Admin_footer';
import "./Admin_viewproduct.css"
import Admin_sidebar from '../components/admin_sidebar';
import data from '../../user/components/data';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Admin_viewproduct = () => {
const [name,setName]=useState([]);
useEffect(()=>{
  const product= async()=>{

  
  try{

    const fetchproduct=await fetch("/pr")
    const data=await fetchproduct.json()
    setName(data)
  }
  catch{
console.log("er");

  }
}
product()
},[])
const funcdelete=async(id)=>{
  try{
const del=await fetch(`/delete/${id}`,{
  method:"DELETE",
})
if(del.ok){
     console.log("suc")


}
Swal.fire({
  icon: 'success',
  title: 'Product Added!',
  text: 'Your product was successfully added to the database.',
  confirmButtonColor: '#07294d',
})
setName(prev => prev.filter(item => item._id !== id));
  }
  catch{
console.log("er");

  }
}

  return (
    <>
    
      <Admin_header />
      
      <div className="view_cont">
        <Admin_sidebar />
        <div className="view_back">
          
        {name.map((item)=>(
        
          
        
        

            <div className="view_box">
              <img src={`http://localhost:3000/image/${item.pic}`}  />

              <h2>{item.name}</h2>
              <div className="pricee"><h1><sup>₹</sup>{item.price}</h1></div>
              <p>{item.description}</p>
              <div className="button">
                <Link to={`/edit-product/${item._id}`}>
                <button className="edit"><i className="fas fa-edit"></i> Edit</button>  </Link>
                <button className="delete" onClick={()=> funcdelete(item._id)}><i className="fas fa-trash"></i> Delete</button>
                <button className="view"><i className="fas fa-eye"></i> View</button>
              </div>
            </div>
                  ))}
                  </div>
          </div>
        
      
      <Admin_footer />

    </>
  )
}

export default Admin_viewproduct;
