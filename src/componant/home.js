import React from "react";
import "../style/css/index.css";

const Home = () => {
  return (
    <div className="container-fluid content">
      <img
        className="backgroundhome"
        src={process.env.PUBLIC_URL + "imgs/fabric blue 11 (1).jpg"}
        alt=""
      />

      <div className="container con">
        <div className="row">
          <div className="welcome col-12 col-lg-6 text-center text-lg-left">
            <h1>your closet</h1>
            <h3>Store</h3>
          </div>
          <div className="imgleft col-md-4 d-none d-lg-block">
            <div className="fimg">
              <img src={process.env.PUBLIC_URL + "imgs/fur.jpg"} alt="" />
            </div>
            <div className="simg">
              <img src={process.env.PUBLIC_URL + "imgs/scarf.jpg"} alt="" />
            </div>
            <div className="timg">
              <img src={process.env.PUBLIC_URL + "imgs/satan (1).jpg"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
