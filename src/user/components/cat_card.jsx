import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from "./data.js";

import { Link } from "react-router-dom";

function Cat_card() {
    const [name,setName]=useState([]);
    useEffect(()=>{
      const product=async()=>{
        try{
  const fetchproduct=await fetch("http://localhost:3000/pr")
  const data=await fetchproduct.json();
  setName(data)
        }
        catch{
  console.log("er")
        }
      }
      product()
    },[])
  return (
    <>
    <div className="cat_s_img item" >
    {name.map((item,index)=>(
        <Link to={`/detail/${item._id}`}> 
        
        <div class="products-single" key={index}>
        <div class="box-img-hover">
            <div class="type-lb">
                <p class="sale">Sale</p>
            </div>
            
            <img src={`http://localhost:3000/image/${item.pic}`}  />
            <div class="mask-icon">
                <a class="cart" href="#">Add to Cart</a>
                <ul>
                    <li><a href="#" title="View"><i class="fas fa-eye"></i></a></li>
                    <li><a href="#" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                    <li><a href="#" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="why-text">
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5>{item.price}</h5>
        </div>
    </div>
        
        </Link>
      ))}
      </div>
    </>
  );
}

export default Cat_card;
