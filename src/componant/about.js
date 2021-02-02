import React from "react";
import "../style/css/about.css";
const About = () => {
  return (
    <div className="container-fluid fluid">
      <img
        className="backgroundhome"
        src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
        alt=""
      />
      <div className="container cont">
        <div className="col aboutcontent">
          <p className="lead">
            Your closet is a websit for a designer how publish his designes and
            creativity that sute Your needs . The size you want . Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Qui ducimus, eius
            assumenda laudantium, officia odit molestias corrupti repellendus
            placeat debitis, consequuntur harum. Illum ex ratione mollitia eaque
            laborum nam dolorum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores, rem libero! Necessitatibus, corrupti
            iusto facere, magnam quos quo qui ab at iste molestiae sint adipisci
            rerum eos nobis illum aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
