import React from "react";
import "../style/css/payment.css";
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
          <div className="paymentcontent lead ">
            Paiement when recieving Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo temporibus unde ea numquam repudiandae
            reiciendis voluptatem dolorem! Omnis quas, illum quidem, animi in
            dolor perspiciatis soluta ea deserunt praesentium consequuntur!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
