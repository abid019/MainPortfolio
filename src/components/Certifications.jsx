import React from "react";
import leftArrow from "../assets/img/left-arrow.svg";
import rightArrow from "../assets/img/right-arrow.svg";
import { certificates } from "../assets/data/certificates";
import Certifi from "./Certifi";
import webdevCertificate from '../assets/certificates/webdevCertificate.png'

const Certifications = () => {
  return (
    <React.Fragment>
      <section className="certifications section" id="certifications">
        <div className="reveal">
          <h2 className="section__title">Certifications</h2>
          <span className="section__subtitle">Showcasing my skillset</span>
          <center>
            <div className="certificates__container container grid">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="1800"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="carousel-cert-img d-block w-100"
                      src={webdevCertificate}
                      alt="..."
                    />
                  </div>
                  {certificates.map((c, idx) => (
                    <Certifi key={idx} link={c} />
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <img src={leftArrow} alt="" width={80} />
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <img src={rightArrow} alt="" width={65} />
                </button>
              </div>
            </div>
          </center>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Certifications;
