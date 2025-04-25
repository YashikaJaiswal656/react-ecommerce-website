import React, { useState } from 'react'
import { useEffect } from "react";

import data from "../components/data";
import { Link } from 'react-router-dom';

const show = () => {
    useEffect(() => {
        let pcont = document.querySelector('.slide_show');
        let nextBtn = document.querySelector('.fa-arrow-right');
        let prevBtn = document.querySelector('.fa-arrow-left');

        let scrollAmount = 280;

        if (pcont && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                pcont.scrollLeft += scrollAmount;
            });

            prevBtn.addEventListener('click', () => {
                pcont.scrollLeft -= scrollAmount;
            });
        }
    }, []); // Runs only once when the component mounts

const [name,setName]=useState([])
useEffect(()=>{
    const product=async()=>{
        try{
const fetchproduct=await fetch("http://localhost:3000/pr")
const data=await fetchproduct.json()
setName(data)
        }
        catch{
console.log("er")
        }
    }
    product()
})
  return (
    
    <div className="show">
    <div className="show_cont">
        <div className="arrow_cont">
            <i className="fa fa-arrow-left"></i>
            <i className="fa fa-arrow-right"></i>

        </div>

        <div className="slide_show">
            {name.map((item,index)=>(
                <Link to="/shop">
            <img src={`http://localhost:3000/image/${item.pic}`}  /></Link>
            ))}
        </div>
    </div>
</div>

  )
}

export default show