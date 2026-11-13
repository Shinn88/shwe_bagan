
import { Link } from "react-router-dom";
import logo from "../photo/logo.png";
import payment from "../photo/payment.png";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        
        {/* Column 1: Brand & Description */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="CTOUR Logo" />
          </Link>
          <p className="footer-tagline">Discover Bagan, one journey at a time.</p>
          <p className="footer-description">
            Explore ancient heritage, local culture, and unforgettable places in Myanmar.
          </p>
        </div>

        {/* Column 2: Explore Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#places">Places</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><Link to="/#itinerary">Itineraries</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Discover</h4>
          <ul>
            <li><a href="#about">About SHWE BAGAN</a></li>
            <li><a href="https://gemini.google.com/app">Ask SHWE BAGAN AI</a></li>
            <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjNXqtcgwXXdsxnJMgCKbTsrMdwqSBXnWwvKJkwLGRbFCCZnwsQQmdNLlPnCWrxFxl">Contact</a></li>
          </ul>
        </div>
        <div className="footer-payment">
          <h4>Donate Us</h4>
          <p>Scan to Donate us securely via KPay.</p>
          
          <img 
            src= {payment} 
            alt="KPay QR Code" 
            className="kpay-qr" 
          />
        </div>

      </div>

      {/* Bottom Line: Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 SHWE BAGAN. A Bagan Travel Guide project.Developed by Tut Tut, Pyae Pyae Kyaw and Shin Thant Aung</p>
      </div>
    </footer>
  );
}