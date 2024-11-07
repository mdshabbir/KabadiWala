import { useState } from "react";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";

//Images
import logo from "../../Assets/logo.png";
import close from "../../Assets/close.png";
import hamburger from "../../Assets/hamburger.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleButton = () => {
    setMenu(!menu);
    navigate("/sell");
  };
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
          <h3>
            Online <span>KabadiWala</span>
          </h3>
        </NavLink>
      </div>

      <div className={menu ? "menu active" : "menu"}>
        <NavLink to="/services" onClick={handleMenu}>
          {" "}
          Services
        </NavLink>
        <NavLink to="/about-us" onClick={handleMenu}>
          About Us
        </NavLink>
        <NavLink to="/rate-list" onClick={handleMenu}>
          Rate List
        </NavLink>
        <button className="button" onClick={handleButton}>
          Sell Scrap
        </button>
      </div>

      <div className="hamburger" onClick={handleMenu}>
        <img src={menu ? close : hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
