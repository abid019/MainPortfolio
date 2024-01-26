import React from "react";
import ForwardIcon from "@mui/icons-material/Forward";
const Banner = () => {
  return (
    <React.Fragment>
      <section className="project section">
        <div className="reveal">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">
                  Got a problem that needs to be solved technically?
                </h2>
                <p className="project__description">Let's talk!</p>
                <a
                  href="#contact"
                  className="button button--flex button--white"
                >
                  Contact me
                  <ForwardIcon />
                </a>
                <i className="uil uil-message project__icon button__icon"></i>
              </div>

              <img
                src="assets/img/project.pn"
                alt=""
                className="project__img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
