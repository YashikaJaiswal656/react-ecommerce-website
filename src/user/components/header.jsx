import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/contex"; // Adjust the path as needed
import Swal from 'sweetalert2';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        const sideMenu = document.querySelector(".side_two");
        const menuIcon = document.querySelector(".menu-icon");

        if (sideMenu.classList.contains("showw")) {
            sideMenu.classList.remove("showw");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        } else {
            sideMenu.classList.add("showw");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        }
    };

    const handleLogout = () => {
        Swal.fire({
            icon: 'success',
            title: 'Logout Successful',
            text: 'You have been logged out.',
            confirmButtonColor: '#b0b435',
        }).then(() => {
            logout();          
            navigate("/");     
        });
    };
    
    return (
        <>
            <div className="nav">
                <div className="item">
                    <ul>
                        <li>
                            <a href="">
                                <i className='fa fa-user s_color'></i>
                                My Account |
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className='fas fa-location-arrow'></i>
                                Our location |
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className='fas fa-headset'></i>
                                Contact Us |
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="register">
                    {
                        user ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to="/login"><button>Register here</button></Link>
                        )
                    }
                </div>
            </div>

            <div className="two_nav">
                <i className="fa fa-bars menu-icon" onClick={toggleMenu}></i>

                <div className="logo">
                    <img src="https://themewagon.github.io/freshshop/images/logo.png" alt="Logo" />
                </div>

                <div className="two_item">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/Gallery"><li>Gallery</li></Link>
                        <Link to="/contact"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>

            <div className="side_two">
                <div className="side_list">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/Gallery"><li>Gallery</li></Link>
                        <Link to="/cart"><li>Cart</li></Link>
                        <Link to="/contact"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
