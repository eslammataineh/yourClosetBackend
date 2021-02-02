import React, { useContext, useState } from "react";
import "../style/css/header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
/*import axios from "axios"; */
const Header = () => {
  let [Auth, setAuth] = useContext(AuthContext);

  console.log(Auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light boot-nav fixed-top ">
        <div className="container">
          <div className="logo">YC</div>
          <button
            className="navbar-toggler burger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="burger-line">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </span>
          </button>
          <div className="collapse navbar-collapse navbarr" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/clothes">
                  Jackets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pants">
                  Pants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dresses">
                  Dresses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hijab">
                  Hijab & Scarf
                </Link>
              </li>

              <li className="about nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="contact nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* {Auth.Signinuser.isAdmin ? ( */}
              <li className="admin nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
              {/* ) : null} */}
              <li className="login nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>

              <li className="basket nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
