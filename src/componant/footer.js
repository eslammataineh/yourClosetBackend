import React from "react";
import "../style/css/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="foot ">
      <div className="container-fluid footcont">
        <div className="container footcen">
          <div className="row dir">
            <div className="contact col-12 col-md-4 text-center">
              <h5>Follow Us</h5>
              <div className="social">
                <a
                  href="https://web.facebook.com/eslam.mataineh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/eslam-mataineh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/eslammataineh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="about col-12 col-md-4   text-center">
              <h5>done by eslam mataineh &copy; 2021</h5>
            </div>
            <div className="extrainfo col-12 col-md-4 text-center aboutpage">
              <h5>
                <Link to="/about">About</Link>
              </h5>
              <h5>
                <Link to="/offers">Offers</Link>
              </h5>
              <h5>
                <Link to="/payment">Payment</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
