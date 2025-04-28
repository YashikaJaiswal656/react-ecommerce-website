import React from "react";
import { Link } from "react-router-dom";
import data from "../components/data";

function Card({ item }) {

  
  return (
    <div className="box item">
      <Link to={`/detail/${item._id}`}>
        
                    <img  src={`http://localhost:3000/image/${item.pic}`}  />
      </Link>
      <a href="" className="btn_3 chipi">SHOP NOW</a>
    </div>
  );
}

export default Card;
