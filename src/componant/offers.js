import React from "react";
import "../style/css/offers.css";
const Offers = () => {
  return (
    <div className="container-fluid offersfluid">
      <img
        className="backgroundhome"
        src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
        alt=""
      />
      <div className="container offerscont">
        <div className="row">
          <div className="offer col-12 col-lg-4">
            <p>15%</p>
          </div>
          <div className="offerscontent col-12 col-lg-8 lead">
            You can get a 15% discount on your first order Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo temporibus unde ea
            numquam repudiandae reiciendis voluptatem dolorem! Omnis quas, illum
            quidem, animi in dolor perspiciatis soluta ea deserunt praesentium
            consequuntur!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
