import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Qualification = () => {
  return (
    <React.Fragment>
      <section className="qualification__section">
        <div className="reveal">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My Personal Journey</span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                <SchoolIcon /> &nbsp; Education & &nbsp;
                <WorkIcon /> &nbsp; Work
              </div>

              <div
                className="qualification__button button--flex"
                data-target="#work"
              >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
              </div>
            </div>

            <div className="qualification__sections">
              <div
                className="qualification__content qualification__active"
                data-content
                id="education"
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      B.Tech. Information Technology
                    </h3>
                    <span className="qualification__subtitle">
                      Guru Ghasidas Central University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      Jul 2020 - Jul 2024
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Problem Solver</h3>
                    <span className="qualification__subtitle">LeetCode</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web Development</h3>
                    <span className="qualification__subtitle">CodeHelp</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Qualification;
