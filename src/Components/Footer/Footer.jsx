import { Link } from "react-router-dom"
import "./Footer.scss"


//Images
import logo from "../../Assets/logo.png"
import instagram from "../../Assets/instagram.png"
import facebook from "../../Assets/facebook.png"
import twitter from "../../Assets/twitter.png"


const Footer = () => {
  return (
    <footer>
      <div className="logo">
       <Link to="/">
          <img src={logo} alt="" />
          <h3>Modern KabadiWala</h3>
       </Link>
      </div>

      <div className="important-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/rate-list">Rate List</Link>
        <Link to="/sell">Sell</Link>
      </div>

      <div className="help">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
      </div>

      <div className="social-media">
        <a href="#">
          <img src={instagram} alt="" />
        </a>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={twitter} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer