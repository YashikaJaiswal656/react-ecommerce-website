import { useEffect } from "react";
import "./App.css";
import Carousel from "../components/carousel";
import Cat from "../components/cat";

import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Show from "../components/show";

import data from "../components/data";
function App() {
  return (
    <>
      <Header />
      <div className="slider"  >
       <div className="slider_back">
       <h1 ><strong>Welcome To <br />Freshshop</strong></h1>
        <p>See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
        
            <a href="" className="btn_3">SHOP NOW</a>

        
       </div>
      </div>

      <Carousel />
      <Cat />
      <Show/>
      <Footer />

    </>
  );
}

export default App;
