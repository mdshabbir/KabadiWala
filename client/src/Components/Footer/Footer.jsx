import { Link } from "react-router-dom"
import "./Footer.scss"


//Images
import logo from "../../Assets/logo.png"
import instagram from "../../Assets/instagram.png"
import facebook from "../../Assets/facebook.png"
import twitter from "../../Assets/twitter.png"
import home from "../../Assets/home.png"
import email from "../../Assets/email.png"
import phone from "../../Assets/telephone.png"


const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
            <h3>Modern <span>KabadiWala</span></h3>
          </Link>
        </div>

        <div className="details">
          <div className="group">
            <img src={home} alt="" />
            <a href="https://goo.gl/maps/yJA7HWtTysHPKXES8" target="_blank">Cabin 3, 1st floor A&A Lake front opp. <br />
              Durgam cheruvu, Hyderabad</a>

          </div>

          <div className="group">
            <img src={email} alt="" />
            <a href="#" target="_blank">test@email.com</a>
          </div>

          <div className="group">
            <img src={phone} alt="" />
            <a href="#" target="_blank">+91-9879120876</a>
          </div>

        </div>

        <div className="important-links">
          <Link to="/about-us">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/rate-list">Rate List</Link>
          <Link to="/sell">Sell Scrap</Link>
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
      </div>
      <div className="lower">
        <p>Made with ❤ by <a href="https://www.instagram.com/i_am_zayd_ali/" target="_blank">Zayd</a></p>
      </div>
    </footer>
  )
}

export default Footer