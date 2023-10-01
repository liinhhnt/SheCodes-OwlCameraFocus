import React, { useState } from "react";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import logoImage from "../../assets/image/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  // Đường dẫn tới file ảnh

  return (
    <>
      <div className={active ? "nav-bar search-active" : "nav-bar"}>
        <div className="logo" onClick={(e) => navigate("/")}>
          <img src={logoImage} alt="Logo" />
          {/* <p> Owl Camera Focus giúp bạn tăng sự tập trung trong học tập </p> */}
        </div>
        <div className="menu-first">
          {/* <NavLink to="/">Home</NavLink> */}
          {/* <NavLink to="/products"> Products </NavLink> */}
          {/* <NavLink to="/contact"> Contact </NavLink> */}
        </div>
        <div className="menu-second">
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
