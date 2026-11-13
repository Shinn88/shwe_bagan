import logo from "../photo/logo.png";
import { useState } from "react"
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

    return (
        <>
            <header className="site-header">
                <a href="#" className="logo">
                    <img src={logo} alt="Bagan Travel Guide logo" />
                </a>
                

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#places">Places</a></li>
                        <li><a href="#activities">Activities</a></li>
                        <li><a href="#itinerary">Itinerary</a></li>
                        <li className="dropdown">
                            <a href="#facilities" className="dropbtn">Facilities ▾</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/facilities/hotels">Hotels & Restaurants</Link></li>
                                <li><Link to="/guides">Local Tourist Guides</Link></li>
                            </ul>
                        </li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </nav>
                <button className="nav-login-btn" onClick={() => setIsLoginOpen(true)}>
                    Sign up
                </button>
            </header>

            {isLoginOpen && (
                <div className="modal-overlay" onClick={() => setIsLoginOpen(false)}>
                    {/* e.stopPropagation() prevents clicking inside the box from closing the modal */}
                    <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setIsLoginOpen(false)}>
                            ✕
                        </button>
                        
                        <h2>Welcome Back</h2>
                        <p>Log in to save your Bagan itineraries.</p>
                        
                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            
                            <button type="submit" className="submit-login-btn">Sign up</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
export default Navbar;