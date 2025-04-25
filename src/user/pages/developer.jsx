import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import "./developer.css"

const Developer = () => {
  return (
  <>
  
  
  <Header/>
  
  <div className="detail_cont">
                <div className="detail_back char">
                    <h1>About Us</h1>
                    <button className='btn_3'>About Us</button>
                </div>
            </div>
            
            <div className="detail_container">
                <div className="half_detail abo_detail">
                    <div className="detail_img aboutus_img" >
                        <img src="https://themewagon.github.io/freshshop/images/about-img.jpg"   alt="" />
                    </div>
                    <div className="single-product-details aboutus_detail">
                        <h2>We Are Freshshop</h2>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						

						<div className="price-box-bar">
							<div className="cart-and-bay-btn">
                            <button className='btn_3'>Read More</button>
                            
                                
							</div>
						</div>

                    </div>
                </div>
            </div>



    <Footer/>
  </>
  )
}

export default Developer;