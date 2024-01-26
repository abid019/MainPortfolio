import React from "react";

const Certifi = ({ link }) => {
  return (
    <React.Fragment>
      <div className="carousel-item">
        <img className="carousel-cert-img d-block w-100" src={link} alt="..." />
      </div>
    </React.Fragment>
  );
};

export default Certifi;
