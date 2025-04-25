import './detail.css'

import { Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Cat from '../components/cat';
import Show from '../components/show';
import data from "../components/data";
function Gallery() {
    return (
        <>
        <Header/>
        
            <div className="detail_cont">
            <div className="detail_back char">
                <h1>Gallery</h1>
                <button className='btn_3'>Gallery</button>
            </div>
            </div>
            
            <Cat/>
            <Show/>
            <Footer/>
        </>
    )
}
export default Gallery;