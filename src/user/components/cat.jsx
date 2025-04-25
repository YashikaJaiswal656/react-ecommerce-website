import Cat_card from "./cat_card";


import { Link } from "react-router-dom";

function Cat() {
     
    return (
        <>
            <div className="cat_s">


                <div className="cat_s_box">
                    <div className="i">
                        
                        <h1>Fruits and Vegetable</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="button"><a href="" className="">All</a>
                        <a href="" className="">Top Featured</a>
                        <a href="" className="">Best Seller</a></div>
                    </div>
                    <Cat_card/>
                    
                </div>

            </div>

        </>
    )
}
export default Cat;