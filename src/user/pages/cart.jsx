import "./cart.css"
import Header from "../components/header"
import Footer from "../components/footer"

import Show from "../components/show";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../components/contex";
import { useNavigate } from "react-router-dom";




function Cart() {




  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);
  
const {id}=useParams()
const [name,setName]=useState(null)
useEffect(()=>{
    const product=async()=>{
        try{
const fetchproduct=await fetch(`/product/${id}`)
const data=await fetchproduct.json()
setName(data)
        }
        catch{
console.log("er");

        }
    }
    product()
},[id])

useEffect(() => {
    if (name) {
        const amtElement = document.querySelector(".amt_price");
        const quantityInput = document.querySelector(".quantity_input");
        const updateElement = document.querySelector(".update_pr");

        if (amtElement && quantityInput && updateElement) {
            let amt = parseFloat(amtElement.innerHTML);

            quantityInput.addEventListener('input', () => {
                let quantity = parseInt(quantityInput.value) || 1;
                let total = amt * quantity;
                updateElement.innerHTML = total;
            });
        }
    }
}, [name]);

   let update=()=>{
        let cart_sub=document.querySelector(".update_pr").innerHTML;
        document.querySelector(".cart_price").innerHTML=cart_sub;
        let gst=cart_sub*10/100;
        document.querySelector(".cart_gst").innerHTML=gst;
        let grand_price=parseInt(cart_sub)+parseInt(gst);
        document.querySelector(".cart_total").innerHTML=grand_price
        }
        const checkout= async()=>{
const price=document.querySelector(".cart_price").innerHTML;
const gst=document.querySelector(".cart_gst").innerHTML
const total=document.querySelector(".cart_total").innerHTML
const name=document.querySelector(".name_pr").innerHTML

try{
    const res=await fetch("/checkout",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            price:price,
            gst:gst,
            total:total,
            name:name,
            quantity: document.querySelector(".quantity_input").value || 1
        }),
    })
    const result=await res.json()
    if(res.ok){
        window.location.href = "/checkout";  
    }else{
        alert("er")
    }
    
}catch{
console.log("er")
}
        }
    return (
        <>
            <Header />

            <div className="detail_cont">
                <div className="detail_back char">
                    <h1>Cart</h1>
                    <button className='btn_3'>Cart</button>
                </div>
            </div>
            <div className="cart_cont">
                <div className="cart_container">
                    <table className="cart_table">
                        <thead className="thead">
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {name&&(
                            <tr>
                                <td>
                                    <img src={`/image/${name.pic}`} alt="Product" className="cart_img" />
                                </td>
                                <td className="name_pr">{name.name}</td>
                                <td className="amt_price">{name.price}</td>
                                <td><input type="number" minvalue={"1"} className="quantity_input " placeholder="1" /></td>
                                <td className="update_pr">{name.price}</td>
                                <td><i className="fas fa-times remove_icon"></i></td>
                            </tr>
                            )}
                            
                        </tbody>
                    </table>
                    <button className="but" onClick={update}>Update Cart</button>
                    <div className="order_summary">
                        <h3>Order Summary</h3>
                        <div className="summary_item">
                            <h4>Sub Total</h4>
                            <div className="summary_value cart_price">130 </div>
                        </div>
                        
                        <hr />
                        
                        <div className="summary_item">
                            <h4>Gst</h4>
                            <div className="summary_value cart_gst">2 </div>
                        </div>
                        <div className="summary_item">
                            <h4>Shipping Cost</h4>
                            <div className="summary_value"> 0 </div>
                        </div>
                        <hr />
                        <div className="summary_total">
                            <h5>Grand Total</h5>
                            <div className="summary_value cart_total"> 388 </div>
                        </div>
                        <hr />
                        <div className="shopping_box">
                            
                            <button className="btn_checkout" onClick={checkout}>
                            Checkout
</button>

                        </div>

                    </div>



                </div>
            </div>
            <Show />
            <Footer />
        </>
    )
}
export default Cart
