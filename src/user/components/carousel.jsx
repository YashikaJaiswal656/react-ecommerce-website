import React, { useEffect, useState } from "react";
import "../pages/App.css";
import Card from "./Card";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "../components/data";

const Carousel = () => {
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
    <div className="cat_main_box">
      <div className="cat_box">
        <OwlCarousel
          className="owl-carousel owl-theme"
          loop={true}
          margin={10}
          nav={true}
          responsive={{
            0: { items: 1 },  
            600: { items: 2 },  
            1000: { items: 3 },  
            1550: { items: 4 },  
          }}
        >
          {name.map((item, index) => (
            <div key={index} className="box item">
              <Card  item={item} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
