import "./about.css"

import { Link } from "react-router-dom";
import data from "../components/data";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Show from "../components/show.jsx";
import React, { useEffect, useState } from "react";


const About = () => {
    const [name, setName] = useState([])
    useEffect(() => {
        const product = async () => {
            try {
                const fetchproduct = await fetch("http://localhost:3000/pr")
                const data = await fetchproduct.json()
                setName(data)
            }
            catch {
                console.log("er");

            }
        }
        product()
    }, [])
    return (
        <>
            <Header />
            <div className="card_cont_back">
                <div className="card_back">
                    <p className="cardtext">Check each product page for other buying options. Price and other details may vary based on product size and colour.
                    </p>
                    {name.map((item) => (
                       <div className="box">
                         <img src={`http://localhost:3000/image/${item.pic}`} />
                            <div className="text">
                                <h2>Premium Product</h2>

                                <div className="pricee">
                                    <h1><sup>₹</sup>{item.price}</h1>
                                </div>
                                <p>Save money with our offer</p>
                                <span>Fresh food</span>
                                <p>Free Delivery On <b>Sunday</b></p>
                                <Link to={`/detail/${item._id}`}> <button className="btn_3">More Info</button></Link>
                            </div>
                        </div>


                    ))}

                </div>
            </div>
            <Show />
            <Footer />

        </>
    )
}
export default About;

