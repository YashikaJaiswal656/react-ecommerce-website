import './detail.css'

import { Link, useParams } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Cat from '../components/cat';
import Show from '../components/show';
import data from "../components/data";
import React, { useEffect, useState } from 'react';

function Detail() {
    const {id}=useParams()
    const [name,setName]=useState(null);
    useEffect(()=>{
        const product=async()=>{
            try{
    const fetchproduct=await fetch(`/product/${id}`)
    const data=await fetchproduct.json()
    setName(data)
            }
            catch{
    console.log("er")
            }
        }
        product()
    },[id])
    
    return (
        <>
        <Header/>
        
            <div className="detail_cont">
            <div className="detail_back char">
                <h1>Shop Details</h1>
                <button className='btn_3'>Shop details</button>
            </div>
            </div>
            <div className="detail_container">

                
                {name &&(
                
                <div className="half_detail">

                    <div className="detail_img">
                        <img src={`/image/${name.pic}`}  />
                    </div>
                    <div className="single-product-details ">
                        <h2>{name.name}</h2>
                        <h5> Rs {name.price}</h5>
                        <p className="available-stock"><span> More than 20 available / <a href="#">8 sold </a></span></p>
						<h4>Short Description:</h4>
						<p> {name.description}. Nam sed neque id eros fermentum dignissim quis at tortor. Nullam ultricies urna quis sem sagittis pharetra. Nam erat turpis, cursus in ipsum at,
							tempor imperdiet metus. In interdum id nulla tristique accumsan. Ut semper in quam nec pretium. Donec egestas finibus suscipit. Curabitur tincidunt convallis arcu. </p>
						

						<div className="price-box-bar">
							<div className="cart-and-bay-btn">
                            <button className='btn_3'>Buy New</button>
                            <Link to={`/cart/${name._id}`}>
                            <button className='btn_3'>Add to cart</button></Link>
                                
							</div>
						</div>

						<div className="add-to-btn">
							<div className="add-comp">
								<button className="btn_3" ><i className="fas fa-heart"></i> Add to wishlist</button>
								<button className="btn_3" ><i className="fas fa-sync-alt"></i> Add to wishlist</button>

							</div>
							<div className="share-bar">
								<button className='btn_3'><i className="fab fa-facebook" aria-hidden="true"></i></button>
								<button className='btn_3'><i className="fab fa-google-plus" aria-hidden="true"></i></button>
								<button className='btn_3'><i className="fab fa-twitter" aria-hidden="true"></i></button>
								<button className="btn_3" ><i className="fab fa-pinterest-p" aria-hidden="true"></i></button>
								<button className="btn_3"><i className="fab fa-whatsapp" aria-hidden="true"></i></button>
							</div>
						</div>
                    </div>
                </div>
                )}
            </div>
            <Cat/>
            <Show/>
            <Footer/>
        </>
    )
}
export default Detail;
