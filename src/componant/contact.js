import React from "react";
import "../style/css/contact.css";
const Contact = () => {
  return (
    <div className="container-fluid fluid">
      <img
        className="backgroundhome"
        src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
        alt=""
      />
      <div className="container cont">
        <form className="form  col-12 col-lg-9">
          <h4>contact for information</h4>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit" className="submitcontact">
            Send <i class="fas fa-heart"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
