
import "./checkout.css"
import Header from "../components/header"
import Footer from "../components/footer"
import emailjs from '@emailjs/browser';
import Show from "../components/show";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

import { useAuth } from "../components/contex";
import { useNavigate } from "react-router-dom";
function Checkout() {
    
      const { user } = useAuth();
      const navigate = useNavigate();
    
      useEffect(() => {
        if (!user) {
          navigate("/login"); // Redirect to login if not logged in
        }
      }, [user, navigate]);
    
    const [check, setcheck] = useState({})
    useEffect(() => {
        
        const fetchpr = async () => {
            try {
                const fetchproduct = await fetch("/checkout")
                const data = await fetchproduct.json()
                setcheck(data[0])
            }
            catch {
                console.log("errrrr");

            }
        }
        fetchpr()

    }, [])


const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const userEmail = form.current['email'].value;
        const name = form.current['name'].value
        const pr_name=document.querySelector(".cart_name").innerHTML;
        const quantity=document.querySelector(".cart_quantity").innerHTML
        const price=document.querySelector(".cart_price").innerHTML
        const gst=document.querySelector(".cart_gst").innerHTML
        const total=document.querySelector(".cart_total").innerHTML
        emailjs.sendForm('service_zlcfuyw', 'template_dg1je7v', form.current, 'n7XQ3u6ywg3svGo0P')
            .then((result) => {
                console.log(result.text);

                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully',
                    text: 'A Confirmation Mail Is Sent To Your Email',
                    confirmButtonColor: '#b0b435',
                }).then(()=>{
                    window.location.href="/";
                })

                // Send confirmation email
                emailjs.send('service_zlcfuyw', 'template_n61mk86', { // <-- replace with your real template ID
                    email: userEmail,
                    name:name,
                    cart_name:pr_name,
                    price:price,
                    quantity:quantity,
                    gst:gst,
                    total:total

                }, 'n7XQ3u6ywg3svGo0P')
                    .then((res) => {
                        console.log("Confirmation email sent", res.text);
                    }).catch((err) => {
                        console.error("Confirmation email failed", err.text);
                    });

            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });

        e.target.reset();
    };




    return (
        <>
            <Header />

            <div className="detail_cont">
                <div className="detail_back char">
                    <h1>Checkout</h1>
                    <button className='btn_3'>Checkout</button>
                </div>
            </div>
            <div className="cart_cont">
                <div className="cart_containerr">
                    <div className="cart_cont_one">

                        <div class="contact_form">
                            <h2>BILING ADDRESS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                            <form ref={form} onSubmit={sendEmail}>
                                <label htmlFor="">Your name*</label>
                                <input type="text" name="name" required />
                                <label htmlFor="">Your email*</label>

                                <input type="email" name="email" required />
                                <label htmlFor="" >Address one*</label>

                                <input type="text" name="address_one" required />
                                <label htmlFor="">Address two*</label>

                                <input type="text" name="address_two" required />
                                <label htmlFor="">Phone number*</label>

                                <input type="number"name="phone" required />
                                <label htmlFor="">Zip code*</label>

                                <input type="number" name="code" required />

                                {check&&(
                                    <div className="name">
                                        <input type="hidden" name="pr_name" value={check.name} />
<input type="hidden" name="quantity" value={check.quantity} />
<input type="hidden" name="price" value={check.price} />
<input type="hidden" name="gst" value={check.gst} />
<input type="hidden" name="total" value={check.total} />

                                    </div>
                                )}
                                <button className='btn_3'>Send Message</button>
                            </form>
                        </div>
                    </div>
                    {check &&(
                    <div className="cart_cont_two">
                        <div className="order_summaryy">
                            <h3>Your Order</h3>
                            <div className="summary_item">
                                <h4>Product Name</h4>
                                <div className="summary_value  cart_name">{check.name} </div>
                            </div>
                            <div className="summary_item">
                                <h4>Product Quantity</h4>
                                <div className="summary_value cart_quantity">{check.quantity} </div>
                            </div>
                            <div className="summary_item">
                                <h4>Sub Total</h4>
                                <div className="summary_value cart_price ">{check.price} </div>
                            </div>

                            <hr />

                            <div className="summary_item">
                                <h4>Gst</h4>
                                <div className="summary_value cart_gst">{check.gst}</div>
                            </div>
                            <div className="summary_item">
                                <h4>Shipping Cost</h4>
                                <div className="summary_value"> 0 </div>
                            </div>
                            <hr />
                            <div className="summary_total">
                                <h5>Grand Total</h5>
                                <div className="summary_value cart_total"> {check.total}</div>
                            </div>
                            <hr />
                            <div className="shopping_box">
                                <a href="" className="btn_checkout">Checkout</a>
                            </div>

                        </div>

                    </div>
                    )}
                </div>
            </div>
            <Show />
            <Footer />
        </>
    )
}
export default Checkout;
