import React from 'react'
import "./Admin_cat.css"
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Admin_header from '../components/admin_header';
import Admin_footer from '../components/Admin_footer';
import Admin_sidebar from '../components/admin_sidebar';

const Add_product = ({ onUserAdded  }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [details, setDetails] = useState("")
  const [cat, setCat] = useState("")
  const [rating, setRating] = useState("")
  const [price, setPrice] = useState("")
  const [pic,setPic]=useState("")
  const [categories, setCategories] = useState([]);
  

  // 🔽 Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('description',description)
    formdata.append('details',details)
    formdata.append('rating',rating)
    formdata.append('price',price)
    formdata.append('pic',pic)
    formdata.append('cat',cat)
    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: formdata ,
        
      });
      if (!response.ok) {
        throw new Error("failed to submit ");
      }
      const newUser = await response.json()

      
      setName("")
      setDescription("")
      setDetails("")
      setCat("")
      setRating("")
      setPrice("")
      setPic("")
     
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
        <Admin_sidebar />
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Product Name</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />

            <h3>Short Description</h3>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

            <h3>Long Description</h3>
            <input type="text" value={details} placeholder='Details' onChange={(e) => setDetails(e.target.value)} id="" />
            <h3>Add Category</h3>
            
            <select value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c._id} value={c.cat}>
                  {c.cat}
                </option>
              ))}
            </select>

            <h3>Rating</h3>
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />

            <h3>Price</h3>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <h3>Product Picture</h3>
<input type="file"  onChange={(e)=>setPic(e.target.files[0])} />



            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>


      <Admin_footer />
    </>
  )
}
export default Add_product